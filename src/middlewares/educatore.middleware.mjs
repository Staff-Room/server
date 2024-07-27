
function educatorMiddleware(req, res, next){
    
    try {
        console.log({'msg':'educatorMiddleware to middelware'});
    } catch (error) {
        console.log(error)
    }
    next();
}
export default educatorMiddleware;