import { Request, Response } from "express";
import createUser from "../models/createUser";
import removeUser from "../models/deleteUser";
import allAccount, { getUser } from "../models/getAccounts";
// import getUser from "../models/getUser";
import login from "../models/login";
import monoGet, { monoPost } from "../models/mono";
import saveLink from "../models/saveAccount";

export const signUp = (req: Request, res: Response) => {
	getUser(req.body.email, (resp: []) => {
		if (resp.length)
			return res.status(409).json({ "message": "user already exist in our database" });
		return createUser(req.body, (response: unknown) => res.status(200).json({ data: response }));
	});
};

export const loginUser = (req: Request, res: Response) =>
	login(req.body, (response: unknown) => res.status(200).json({ data: response }));

export const deleteUser = (req: Request, res: Response) =>
	removeUser(req.body, (response: unknown) => res.status(200).json({ data: response }));

// export const saveAccount = (req: Request, res: Response) =>
// 	saveLink(req.body, (response: unknown) => res.status(200).json({ data: response }));

export const transactions = (req: Request, res: Response) =>
	allAccount(req.body, (response: unknown) => res.status(200).json({ data: response }));

// working
export const monoTransaction = (req: Request, res: Response) => {
	monoGet(`https://api.withmono.com/accounts/${req.body.id}/transactions`, (result: any) => {
		const code = +result.statusCode;
		return res.status(code).json(JSON.parse(result.body));
	});
};

export const linkedAccounts = (req: Request, res: Response) => {
	console.log("working");
	monoGet(`https://api.withmono.com/accounts/${req.body.id}`, (result: any) => {
		const code = result.statusCode ? +result.statusCode : 200;
		return res.status(code).json(JSON.parse(result.body));
	});
};

export const unLinkAccount = (req: Request, res: Response) => {
	console.log("working");
	monoPost(`https://api.withmono.com/accounts/${req.body.id}/unlink`, {}, (result: any) => {
		const code = +result.statusCode;
		return res.status(code).json(result.body);
	});
};

// working
export const Auth = async (req: Request, res: Response) => {
	await monoPost("https://api.withmono.com/account/auth", req.body, (result: any) => {
		console.log(req.body);
		console.log(result);
		const code = result.statusCode ? +result.statusCode : 200;
		const accound_id = result.body.id ? result.body.id : "";
		if (accound_id)
			return saveLink(
				{
					user_id: req.query.id.toString(),
					mono_id: accound_id,
				},
				(response: unknown) => res.status(200).json({ data: response })
			);

		return res.status(code).json(result.body);
	});
};
