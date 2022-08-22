import connection from "../connection/connect";

export interface Data {
	id: string;
}

const removeUser = (req: Data, callback: CallableFunction) => {
	const sql = `DELETE FROM users WHERE id = ${req.id}`;
	connection.query(sql, (error, result) => {
		if (error) callback(error);
		return callback(result.affectedRows);
	});
};

export default removeUser;
