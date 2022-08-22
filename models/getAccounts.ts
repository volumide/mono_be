import connection from "../connection/connect";
import { Data } from "./deleteUser";

const allAccount = (req: Data, callback: CallableFunction) => {
	const sql = `SELECT * FROM users LEFT JOIN accounts ON users.id = accounts.user_id WHERE id = ${req.id} `;
	connection.query(sql, (error, result) => {
		if (error) return callback(error);
		return callback(result);
	});
};

export const getUser = (req: Data, callback: CallableFunction) => {
	const sql = `SELECT * FROM users WHERE email = '${req}' LIMIT 1 `;
	connection.query(sql, (error, result) => {
		if (error) return callback(error);
		return callback(result);
	});
};

export default allAccount;
