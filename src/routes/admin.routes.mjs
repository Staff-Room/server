import { Router } from "express";

import {getAuthAdmin, postAuthAdmin } from "../controllers/admin/auth.admin.controller.mjs";
import { verifcationAdmin } from "../controllers/admin/verification.admin.controller.mjs";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const adminRoute = new Router();

// Add adminRoute
adminRoute.route("/").get(getAuthAdmin).post(postAuthAdmin);
adminRoute.route("/verification",).get(verifcationAdmin).post(verifcationAdmin)
// adminRoute.post('/', postAuthEducatorController);
// adminRoute.put('/', SessionController.store);
// adminRoute.delete('/', SessionController.store);

export default adminRoute;
