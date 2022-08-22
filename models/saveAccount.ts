import connection from "../connection/connect";

interface LinData {
	user_id: string;
	account_id: string;
}

const saveLink = (req: LinData, callback: CallableFunction) => {
	const sql = `INSERT INTO accounts ( user_id, account_id) VALUES ('${req.user_id}', '${req.account_id}')`;
	connection.query(sql, (error, result) => {
		if (error) return callback(error);
		return callback(result);
	});
};

export default saveLink;
