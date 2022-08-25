import connection from "../connection/connect";

const account = `CREATE TABLE IF NOT EXISTS accounts (
	id int(11) NOT NULL,
	user_id int(11) NOT NULL,
	mono_id varchar(255) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  `;

const userTable = `
 CREATE TABLE IF NOT EXISTS users(
	id int(11) NOT NULL,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

connection.query(account, (err, res) => {
	if (err) throw err;
	console.log("table created");
});

connection.query(userTable, (err, res) => {
	if (err) throw err;
	console.log("table created");
});
