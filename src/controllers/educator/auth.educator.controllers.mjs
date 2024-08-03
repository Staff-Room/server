import { Educator } from '../../models/educator.model.mjs'
import { getToken } from '../../utils/jwt.mjs';
import generateNumericOTP from '../../utils/otp.mjs';

async function postAuthEducatorController(req, res) {
    const { email } = req.body;
    console.log(email)
    const time = new Date().toLocaleString()

    if (!email) return res.status(204).json({ 'msg': 'No content' });
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
            return res.status(200).json({
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
