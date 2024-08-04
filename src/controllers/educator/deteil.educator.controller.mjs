import { Educator } from "../../models/educator.model.mjs";
import {Center} from '../../models/center.model.mjs'

async function getDetailEducatorController(req, res) {
  const body = req.body;
  const email = body.email;
  if (!email) return res.json({ msg: `No Input` });
  try {
    const educator = await Educator.findOne({ email: email });
    if (!educator)
      return res.json({ msg: `user is not present in the database` });
    return res.json({ educator, msg: "user is present" });
  } catch (error) {
    return res.json({ msg: `user is not present ${error}` });
  }
}

async function postDetailEducatorController(req, res) {
  const {email} = req.body
  const centerEmail = 'mkcl01@gmail.com'
  const centerId = 123

  try {
    const center = await Center.findOne({centerEmail:centerEmail}||{centerId:centerId})
    if(!center) return console.log(center);
    console.log(center)
    
    const educator = await Educator.create({
      centerId:center.toObject(),
      email:email,
      isVerified:false
    })
    console.log(educator)
    return res.json(educator)
    
  } catch (error) {
    console.log(error)
    return res.json(error)
    
  }
  
}

async function patchDetailEducatorController(req, res) {
  const body = req.body;
  const email = body.email;
  console.log(email);
  console.log(body);
  if (email) {
    try {
      const educator = await Educator.findOne({ email: body.email })
      if (!educator) return res.json({'msg': "no user found"});
      const update = await educator.updateOne({
        first_Name:body.first_Name,
        last_Name:body.last_Name
      });
      return res.json({
        educator,
        update,
        msg: "patch Detail Educator controller",
      });
    } catch (error) {
      return res.json({ error: error });
    }
  } else {
    return res.json({ msg: "no input" });
  }
}

export {
  getDetailEducatorController,
  postDetailEducatorController,
  patchDetailEducatorController,
};
