import dotenv from "dotenv";
dotenv.config();

export const databaseConfig = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB,
	multipleStatements: true,
	connectionLimit: 10,
};
export const monoSecret = process.env.MONO_SECRET;
export const port = process.env.PORT;
