import { Educator } from "../../models/educator.model.mjs";
import { getToken } from "../../utils/jwt.mjs";

async function postVerficationEducatorController(req, res){
        const {email, otp} = req.body
        console.log(email, otp)
        const time = new Date().toUTCString()
        if(!email || !otp) return res.status(204).json('No Content');
        try {
                const educator = await Educator.findOne({email:email})
                if (!educator) return res.status(404).header({ isLoggin:true}).json({ email: email, msg: 'Educator not found', isLoggin:false, });
                if (educator.otp == otp) {    
                        educator.isVerified = true   
                        educator.lastLogin = time
                        educator.isLoggin = true
                        educator.save()
                        console.log(educator)
                        const token = getToken(educator.id, educator.email, educator.isVerified, time)
                        console.log(token)
                        return res.status(200).header({token:token, isLoggin:true}).json({email:email,isLoggin:true, isVerified:true , token:token});
                }
                educator.isVerified = false   
                educator.isLoggin = false
                await educator.save()
                return res.status(404).header({ isLoggin:false}).json({email:email,isLoggin:false, isVerified:false , otp:otp})
        } catch (error) {
                console.log(error)
                return res.status(500).header({ isLoggin:false}).json({isLoggin:false, error:error ,msg:'Internal Server Error'})
        }
}

export {postVerficationEducatorController};