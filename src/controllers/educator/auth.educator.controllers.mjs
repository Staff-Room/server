import { Educator } from '../../models/educator.model.mjs';
import generateNumericOTP from '../../utils/otp.mjs';

import validator from 'validator';

async function postAuthEducatorController(req, res) {
    const { email } = req.body;
    console.log(email)
    const time = new Date().toLocaleString()
    if (!email) return res.json({Email:null,EmailCheck:false, msg:'No content'});
    
    const checkEmail = validator.isEmail(email)
    if (!checkEmail) return res.json({Email:email,EmailCheck:false, msg:'Invalied Email Address'});
    console.log(checkEmail)

    try {
        const educator = await Educator.findOne({ email: email })
        const OTP = generateNumericOTP()
        console.log(OTP)
        if (educator) {
            await educator.updateOne({ is_verified: false, otp: OTP })
            return res.status(200).json({ email: educator.email, "OTP": OTP })
        } else {
            const user = await Educator.create({
                email: email,
                is_verified: false,
                otp: OTP
            })
            return res.status(200).headers({educatorid:user._id}).json({
                email: user.email,
                "OTP": OTP,
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 'msg': `Internal Server Error : ${error}` })
    }
}

export { postAuthEducatorController };
