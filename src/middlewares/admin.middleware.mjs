import { Log } from "../models/log.model.mjs";

async function adminMiddleware(req, res, next) {
  // const time = dat
  // console.log(time)
  try {
    const log = await Log.create({
      user: "admin",
      where: "web",
      type:'GET',
      status:"Success",
      code: 200,
      requestURI: `https://<domain.com>/admin/<ids>`,
      error:null,
    });
    console.log({ log, msg: `adminMiddleware to middelware` });
  } catch (error) {
    console.log(error);
  }
  next();
}
export default adminMiddleware;
