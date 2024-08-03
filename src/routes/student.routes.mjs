
import { Router } from 'express';

// importing controllers
import { getAuthStudentController, postAuthStudentController } from '../controllers/student/auth.student.controller.mjs';
import { getVerificationStudentController, postVerificationStudentController } from '../controllers/student/verification.student.controller.mjs';
import { getDetailStudentController, patchDetailStudentController, postDetailStudentController, putDetailStudentController } from '../controllers/student/detail.student.controller.mjs';
import { getQuizStudentController, postQuizStudentController } from '../controllers/student/quiz.student.controller.mjs';

// student Route
const studentRoute = new Router();

// student Authantication GET and POST API's
studentRoute.get('/auth', getAuthStudentController);
studentRoute.post('/auth', postAuthStudentController);


// student verification GET and POST API's
studentRoute.get('/verificaion', getVerificationStudentController); 
studentRoute.post('/verification', postVerificationStudentController); 

// student details  { GET, POST, PUT , PATCH }   API's
studentRoute.get('/detail', getDetailStudentController); 
studentRoute.post('/detail', postDetailStudentController); 
studentRoute.put('/detail', putDetailStudentController); 
studentRoute.patch('/detail', patchDetailStudentController); 

// students quizs GET, POST API's
studentRoute.get('/quiz', getQuizStudentController); 
studentRoute.post('/quiz', postQuizStudentController); 

export default studentRoute;
