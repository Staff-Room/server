import { verifyToken } from "../utils/jwt.mjs";

async function educatorMiddleware(req, res, next) {
  const url = req.originalUrl
  console.log(`is Educator middleware route ${url}`)
  const {token} = req.body;
  if (!token) {
    res.status(404).header({msg:'go to login page no token'})
    next();
  }
  try {
    const verify = await verifyToken(token);
    if (!verify) return res.status(401).header({msg: `go to login page no token verifyed`, isLoggin:false});
    res.status(200).header({isLoggin:true})
    next();
  } catch (error) {
    console.log(error);
    res.status(510).header({msg:'Not Extended', isLoggin:false});
    next();
  }
 
}
export default educatorMiddleware;
