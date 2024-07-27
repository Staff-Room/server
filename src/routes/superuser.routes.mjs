import { Router } from 'express';

const superUserRoute = new Router();

// Add superUserRoute
superUserRoute.get('/', (req, res)=>{
    res.send('this is an auth SuperUser route')
});
// superUserRoute.post('/', postAuthEducatorController);
// superUserRoute.put('/', SessionController.store);
// superUserRoute.delete('/', SessionController.store);

superUserRoute.get('/dashboard', (req, res)=>{
    res.send('this is an auth SuperUser dashboard')
});

export default superUserRoute;
