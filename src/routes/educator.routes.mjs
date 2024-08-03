
import { Router } from 'express';

// imports Educatore Controllers
import { postAuthEducatorController} from '../controllers/educator/auth.educator.controllers.mjs';
import { postVerficationEducatorController } from '../controllers/educator/verification.educator.controllers.mjs';
import { getDetailEducatorController, patchDetailEducatorController, postDetailEducatorController } from '../controllers/educator/deteil.educator.controller.mjs';
import { deleteBatchEducatorController, getBatchEducatorController, patchBatchEducatorController, postBatchEducatorController} from '../controllers/educator/batch.educator.controllers.mjs';

// Educator Route
const educatorRoute = new Router();

//Educator Authenticaion GET, POST API's
educatorRoute.post('/auth', postAuthEducatorController);


// Educator Verification GET, POST API's
educatorRoute.post('/verification', postVerficationEducatorController);

// Educator Detail GET, POST, PUT, PATCH API's
educatorRoute.get('/detail', getDetailEducatorController);
educatorRoute.post('/detail', postDetailEducatorController);
educatorRoute.patch('/detail', patchDetailEducatorController);

// Educator Detail GET, POST, PUT, PATCH API's
educatorRoute.get('/batch', getBatchEducatorController);
educatorRoute.post('/batch', postBatchEducatorController);
educatorRoute.patch('/batch', patchBatchEducatorController);
educatorRoute.delete('/batch', deleteBatchEducatorController);


export default educatorRoute;
