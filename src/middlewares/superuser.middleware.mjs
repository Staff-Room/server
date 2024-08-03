import { verifyToken } from "../utils/jwt.mjs";

async function SUMUserLoggendIn(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    res.clearCookie('token');
    return res.redirect('/superuser');
  }

  try {
    const verify = await verifyToken(token);  
    console.log(verify)
    req.user = verify
    next();
    // res.redirect('/superuser/dashboard/')
  } catch (error) {
    console.log(error);
    res.clearCookie('token');
    return res.redirect('/superuser');
  }
  // next();
}





export { SUMUserLoggendIn };
