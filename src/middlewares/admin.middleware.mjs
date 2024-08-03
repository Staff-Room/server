
function adminMiddleware(req, res, next) {
  console.log('is admin middleware')
  next();
}
export default adminMiddleware;
