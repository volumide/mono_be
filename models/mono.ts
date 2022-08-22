import request from "request";
import { monoSecret } from "../config";

const monoGet = async (url: string, cb: CallableFunction) => {
	const options = {
		method: "GET",
		url: url,
		headers: { "mono-sec-key": monoSecret },
	};
	return request(options, (err, response) => {
		if (!err) return cb(response);
		else return cb(err);
	});
};

export const monoPost = async (url: string, body: object, cb: CallableFunction) => {
	const options = {
		method: "POST",
		url: url,
		body: body,
		json: true,
		headers: { "mono-sec-key": monoSecret },
	};
	return request(options, (err, response) => {
		if (!err) return cb(response);
		else return cb(err);
	});
};

export default monoGet;
