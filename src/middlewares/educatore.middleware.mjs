import { verifyToken } from "../utils/jwt.mjs";

async function educatorMiddleware(req, res, next) {
  const url = req.originalUrl
  console.log(`is Educator middleware route ${url}`)
  const {token} = req.body;
  if (!token) {
    res.header({isToken:false})
    next();
  }
  try {
    const verify = await verifyToken(token);
    if (!verify) return res.header({isToken:true,isVailedToken:false, isLoggin:false});
    res.header({isLoggin:true, isToken:true,isVailedToken:true,})
    next();
  } catch (error) {
    console.log(error);
    res.header({msg:'Not Extended', isLoggin:false}).json();
    next();
  }
 
}
export default educatorMiddleware;
