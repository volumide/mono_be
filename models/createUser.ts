import connection from "../connection/connect";
import hash from "bcrypt";

export interface Data {
	name: string;
	email: string;
	password: string;
}

const createUser = async (req: Data, callback: CallableFunction) => {
	const password = await hash.hash(req.password.toString(), 10);
	const sql = `INSERT INTO users ( name, email, password) VALUES ('${req.name}', '${req.email}', '${password}')`;
	connection.query(sql, async (error, result) => {
		if (error) return callback(error);
		return callback(result);
	});
};

export default createUser;
