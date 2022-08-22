import { Application } from "express";
import {
	Auth,
	linkedAccounts,
	loginUser,
	monoTransaction,
	signUp,
	transactions,
	unLinkAccount,
} from "../controller/apiController";

const routes = (app: Application) => {
	app.post("/api/signup", signUp);
	app.post("/api/login", loginUser);
	app.get("/api/get/transaction", transactions);
	app.post("/api/mono/transactions", monoTransaction);
	app.post("/api/linked", linkedAccounts);
	app.post("/api/mono/unlink/account", unLinkAccount);
	app.post("/api/mono/auth", Auth);
};

export default routes;
