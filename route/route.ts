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
	// working
	app.post("/api/signup", signUp);

	// working
	app.post("/api/login", loginUser);

	// working
	app.post("/api/update-password", changePassword);

	// working
	app.delete("/api/delete-user", deleteUser);

	// working
	app.put("/api/update-profile", updateProfile);

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
