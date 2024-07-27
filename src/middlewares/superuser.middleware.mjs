function superUserMiddleware(req, res, next){
    
    try {
        console.log({'msg':'superUserMiddleware to middelware'});
    } catch (error) {
        console.log(error)
    }
    next();
}
export default superUserMiddleware;