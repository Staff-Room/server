function studentMiddleware(req, res, next){
    
    try {
        console.log({'msg':'studentMiddleware to middelware'});
    } catch (error) {
        console.log(error)
    }
    next();
}
export default studentMiddleware;