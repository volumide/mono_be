import connection from "../connection/connect";
import hash from "bcrypt";

export interface Data {
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
		return callback({
			"message": "user successfuly created",
		});
	});
};

export default createUser;
