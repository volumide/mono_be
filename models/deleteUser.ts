import connection from "../connection/connect";

export interface Data {
	id: number;
}

const removeUser = (req: string, callback: CallableFunction) => {
	const sql = `DELETE FROM users WHERE id = ${req}`;
	connection.query(sql, (error, result) => {
		if (error) callback(error);
		if (result.affectedRows) return callback(result.affectedRows);
		return callback("Invalid");
	});
};

export default removeUser;
