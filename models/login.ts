import connection from "../connection/connect";
import { Data } from "./createUser";
import Hash from "bcrypt";
const login = (req: Data, callback: CallableFunction) => {
	const sql = `SELECT * FROM users WHERE email = '${req.email}' LIMIT 1`;
	connection.query(sql, async (error, result) => {
		if (error) callback(error);
		// const user: Data = result;
		if (result) {
			console.log(result);
			const check = (await Hash.compare(req.password.toString(), result[0].password))
				? result[0]
				: "invalid username or password";
			return callback(check);
		}
		return callback("Email not registered in out database");
	});
};

export default login;
