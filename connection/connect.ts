import mysql from "mysql";
import { databaseConfig } from "../config";

const connection = mysql.createPool(databaseConfig);
export default connection;
