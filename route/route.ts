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
	// working
	app.post("/api/signup", signUp);
	// working
	app.post("/api/login", loginUser);

	// app.get("/api/get/transaction", transactions);

	// working
	app.post("/api/mono/transactions", monoTransaction);
	// working
	app.post("/api/mono/linked", linkedAccounts);

	// working
	app.post("/api/mono/unlink/account", unLinkAccount);

	// working
	app.post("/api/mono/auth", Auth);
};

export default routes;
