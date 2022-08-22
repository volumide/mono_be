import request from "request";
const monoGet = async (url: string, cb: CallableFunction) => {
	const options = {
		method: "GET",
		url: url,
		headers: { "mono-sec-key": "test_sk_Vh6VcjMSYJKJ6uiCWjHP" },
	};
	return request(options, (err, response) => {
		if (!err) return cb(response);
		else return cb(err);
	});
};

export const monoPost = async (url: string, body, cb: CallableFunction) => {
	const options = {
		method: "POST",
		url: url,
		body: body,
		json: true,
		headers: { "mono-sec-key": "test_sk_Vh6VcjMSYJKJ6uiCWjHP" },
	};
	return request(options, (err, response) => {
		if (!err) return cb(response);
		else return cb(err);
	});
};

export default monoGet;
