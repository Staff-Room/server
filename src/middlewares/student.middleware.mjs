
function studentMiddleware(req, res, next) {
 console.log('is Student Middelware')
  next();
}
export default studentMiddleware;
