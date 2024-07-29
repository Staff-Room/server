import { Log } from "../models/log.model.mjs";

async function superUserMiddleware(req, res, next) {
  const url = req.originalUrl
  const method =req.method
  const {host} = req.headers
  const protocol = req.protocol
  console.log(url)
  try {
    const log = await Log.create({
      user: "superUser",
      where: "web",
      host:`${host}`,
      type:`${method}`,
      protocol:`${protocol}`,
      url: `https://mkcl.com${url}`,
      error:null,
    });
    console.log({ log, msg: `superUserMiddleware to middelware` });
  } catch (error) {
    const log = await Log.create({
      user: "admin",
      where: "web",
      host:`${host}`,
      type:`${method}`,
      protocol:`${protocol}`,
      url: `https://mkcl.com${url}`,
      error:`${error}`,
    });
    console.log({log, msg:`error msg for this route: ${error}`});
  }
  next();
}
export default superUserMiddleware;
