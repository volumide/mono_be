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

export const saveAccount = (req: Request, res: Response) =>
	saveLink(req.body, (response: unknown) => res.status(200).json({ data: response }));

export const transactions = (req: Request, res: Response) =>
	allAccount(req.body, (response: unknown) => res.status(200).json({ data: response }));

//  code_ywMxfiSsagtfqrHAGUzf
export const monoTransaction = (req: Request, res: Response) => {
	monoGet(
		"https://api.withmono.com/accounts/62fd4ce79eca36462241f7b1/transactions",
		(result: any) => {
			const code = +result.statusCode;
			return res.status(code).json(JSON.parse(result.body));
		}
	);
};

export const linkedAccounts = (req: Request, res: Response) => {
	console.log("working");
	monoGet("https://api.withmono.com/accounts/62fd4ce79eca36462241f7b1", (result: any) => {
		const code = result.statusCode ? +result.statusCode : 200;
		return res.status(code).json(JSON.parse(result.body));
	});
};

export const unLinkAccount = (req: Request, res: Response) => {
	console.log("working");
	monoGet("https://api.withmono.com/accounts/code_ywMxfiSsagtfqrHAGUzf/unlink", (result: any) => {
		const code = +result.statusCode;
		return res.status(code).json(result.body);
	});
};

export const Auth = (req: Request, res: Response) => {
	monoPost("https://api.withmono.com/account/auth", req.body, (result: any) => {
		const code = result.statusCode ? +result.statusCode : 200;
		return res.status(code).json(result.body);
	});
};
