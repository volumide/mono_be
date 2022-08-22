import express, { json } from "express";
import routes from "./route/route";
import cors from "cors";
import connection from "./connection/connect";

const app = express();
const PORT = 4000;
app.use(json());
app.use(cors({ origin: "*" }));
connection.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});
routes(app); // console.log(Connect);

app.listen(PORT, () => {
	console.log(`app is running on port ${PORT}`);
});
