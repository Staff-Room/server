import { verifyToken } from "../utils/jwt.mjs";

function adminMiddleware(req, res, next) {
  console.log('Auth middleware');

  // Retrieve token and email from cookies
  const token = req.cookies['mkcl_token'];
  const email = req.cookies['email'];

  // Check if email and token are present
  if (email && token) {
    try {
      // Verify the token
      verifyToken(token);
      // If valid, redirect to /admin/dashboard
      return res.render('admin/pages/dashboard');
    } catch (error) {
      console.error('Token verification error:', error);
      // If invalid token, redirect to /admin
      return res.render('admin/admin');
    }
  }

  // If no token and email, allow access to /admin and /admin/verification
  if (req.path === '/admin' || req.path === '/admin/verification') {
    return next();
  }

  // Otherwise, redirect to /admin
  return res.render('admin/admin');
}



export default adminMiddleware;
