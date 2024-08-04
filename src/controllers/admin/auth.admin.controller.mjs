import { Admin } from "../../models/admin.model.mjs";
import { getToken } from "../../utils/jwt.mjs";
import { sendMail } from "../../utils/mail.mjs";

async function getAuthAdmin(req, res) {
  return res.json({msg:'is a get auth admin'})

}




async function postAuthAdmin(req, res) {
  const { email } = req.body;
  console.log(email);

  if (!email) {
    return res.redirect('/admin');
  }

  try {
    let user = await Admin.findOne({ email });

    if (user) {
      user.is_verified = false;
      await user.save();
    } else {
      user = await Admin.create({ email, is_verified: false });
    }

    // Generate a token
    const token = getToken(user.id, user.email)
    console.log(token);

    // Send the token via email (uncomment when ready)
    // await sendMail(email, token);

    // Set cookies or other necessary responses
    res.cookie('email', email, { httpOnly: true, secure: false }); // Adjust `secure` as per your environment

    console.log(`http://localhost:8000/admin/verification?token=${token}`)
    // Redirect to verification page
    return res.redirect(`/admin/verification`);
  } catch (error) {
    console.error(error);
    return res.status(500).redirect('/admin');
  }
}


export { getAuthAdmin, postAuthAdmin };
