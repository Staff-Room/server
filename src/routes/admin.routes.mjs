import { Router } from "express";

import {getAuthAdmin, postAuthAdmin } from "../controllers/admin/auth.admin.controller.mjs";
import { getverifcationAdmin , postverifcationAdmin } from "../controllers/admin/verification.admin.controller.mjs";
import { getdashboardAdminController } from "../controllers/admin/dashboard.admin.controller.mjs";
import adminMiddleware from '.././middlewares/admin.middleware.mjs'

// import all controllers
// import SessionController from './app/controllers/SessionController';

const adminRoute = new Router();

// Add adminRoute
adminRoute.route("/").get(getAuthAdmin).post(postAuthAdmin);
adminRoute.route("/verification",).get(getverifcationAdmin).post(postverifcationAdmin)
adminRoute.route("/dashboard",adminMiddleware,).get(getdashboardAdminController)
// adminRoute.post('/', postAuthEducatorController);
// adminRoute.put('/', SessionController.store);
// adminRoute.delete('/', SessionController.store);

export default adminRoute;
