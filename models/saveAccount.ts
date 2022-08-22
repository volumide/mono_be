import connection from "../connection/connect";

interface LinData {
	user_id: string;
	mono_id: string;
}

const saveLink = (req: LinData, callback: CallableFunction) => {
	const sql = `INSERT INTO accounts ( user_id, mono_id) VALUES ('${req.user_id}', '${req.mono_id}')`;
	connection.query(sql, (error, result) => {
		if (error) return callback(error);
		return callback(result);
	});
};

export default saveLink;
