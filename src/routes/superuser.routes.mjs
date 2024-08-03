import { Router } from 'express';
import { getAuthSuperUserController, postAuthSuperUserController } from '../controllers/superuser/auth.superUser.controller.mjs';
import { getDashboardSuperUserController } from '../controllers/superuser/dashboard.superUser.controller.mjs';
import {SUMUserLoggendIn} from '.././middlewares/superuser.middleware.mjs'
import { getLogsSuperUserController } from '../controllers/superuser/logs.superUser.controller.mjs';
import { getUsersSuperUserController } from '../controllers/superuser/users.superUser.controllers.mjs';

const superUserRoute = new Router();

// Add superUserRoute
superUserRoute.route('/',).get(getAuthSuperUserController).post(postAuthSuperUserController)

superUserRoute.get('/dashboard',SUMUserLoggendIn, getDashboardSuperUserController);
superUserRoute.get('/logs',SUMUserLoggendIn, getLogsSuperUserController);
superUserRoute.get('/users',SUMUserLoggendIn, getUsersSuperUserController);

export default superUserRoute;
