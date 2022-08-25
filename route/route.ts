import { Application } from "express";
import {
	Auth,
	changePassword,
	deleteUser,
	linkedAccounts,
	loginUser,
	monoTransaction,
	signUp,
	// transactions,
	unLinkAccount,
	updateProfile,
} from "../controller/apiController";

const routes = (app: Application) => {
	app.post("/api/signup", signUp);
	app.post("/api/login", loginUser);
	app.put("/api/update-password", changePassword);
	app.delete("/api/delete-account", deleteUser);
	app.put("/api/update-profile", updateProfile);
	app.post("/api/mono/transactions", monoTransaction);
	app.post("/api/mono/linked", linkedAccounts);
	app.post("/api/mono/unlink/account", unLinkAccount);
	app.post("/api/mono/auth", Auth);
};

export default routes;
