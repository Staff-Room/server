import { Admin } from "../../models/admin.model.mjs";
import { getToken } from "../../utils/jwt.mjs";
import { sendMail } from "../../utils/mail.mjs";

async function getAuthAdmin(req, res) {
  res.render("admin/admin", { url: "/verification" });
}

async function postAuthAdmin(req, res) {
  const { email } = req.body;
  console.log(email);
  if (!email) {
    return res.redirect("/admin");
  }
  try {
    let user = await Admin.findOne({ email: email });
    
    console.log(user);
    if (user) {
      user.is_verified = false;
      await user.save();
      const token = getToken(user.id,email)
      console.log(token);
      await sendMail(email, token)
      console.log(user);
    } else {
      const newUser = await Admin.create({ email: email, is_verified: false });
      const token = getToken(newUser.id,email)
      console.log(token);
      await sendMail(email, token)
      console.log(newUser.email);
    }
    return res.redirect(`/admin/verification?email=${encodeURIComponent(email)}`);
  } catch (error) {
    console.error(error);
    return res.status(500).send("/admin");
  }
}

export { getAuthAdmin, postAuthAdmin };
