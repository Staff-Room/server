import { Admin } from "../../models/admin.model.mjs";

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
      console.log(user);
    } else {
      user = await Admin.create({ email: email, is_verified: false });
      console.log(user);
    }
    return res.redirect(`/admin/verification?email=${encodeURIComponent(email)}`);
  } catch (error) {
    console.error(error);
    return res.status(500).send("/admin");
  }
}

export { getAuthAdmin, postAuthAdmin };
