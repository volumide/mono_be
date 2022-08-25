import connection from "../connection/connect";
import hash from "bcrypt";

export interface Data {
	id?: string;
	first_name: string;
	last_name: string;
	email: string;
	password: string;
}

const createUser = async (req: Data, callback: CallableFunction) => {
	const password = await hash.hash(req.password.toString(), 10);
	const sql = `INSERT INTO users ( first_name, last_name, email, password) VALUES ('${req.first_name}', '${req.first_name}', '${req.email}', '${password}')`;
	connection.query(sql, async (error, result) => {
		if (error) return callback(error);
		if (result.affectedRows)
			return callback({
				"message": "user successfuly created",
			});
		return callback({
			"message": "Unable to create user try again latter",
		});
	});
};

export const updateUser = async (req: Data, callback: CallableFunction) => {
	const sql = `UPDATE users SET first_name = '${req.first_name}', last_name = '${req.last_name}' WHERE id = '${req.id}'`;
	connection.query(sql, async (error, result) => {
		if (error) return callback(error);
		if (result.affectedRows)
			return callback({
				"message": "user updated created",
			});
		return callback({ message: "Cannot updae" });
	});
};

export const updatePassword = async (req: Data, callback: CallableFunction) => {
	const password = await hash.hash(req.password.toString(), 10);
	const sql = `UPDATE users SET password = '${password}' WHERE id = '${req.id}'`;
	connection.query(sql, async (error, result) => {
		if (error) return callback(error);
		if (result.affectedRows)
			return callback({
				"message": "Password updated successfuly",
			});
		return callback({ message: "Invalid" });
	});
};

export default createUser;
