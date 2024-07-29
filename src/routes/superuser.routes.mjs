import { Router } from 'express';
import { getAuthSuperUserController, postAuthSuperUserController } from '../controllers/superuser/auth.superUser.controller.mjs';
import { getDashboardSuperUserController } from '../controllers/superuser/dashboard.superUser.controller.mjs';

const superUserRoute = new Router();

// Add superUserRoute
superUserRoute.route('/',).get(getAuthSuperUserController).post(postAuthSuperUserController)

superUserRoute.get('/dashboard', getDashboardSuperUserController);

export default superUserRoute;
