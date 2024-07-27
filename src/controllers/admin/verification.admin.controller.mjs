


function verifcationAdmin(req, res){
    const email = req.query.email;
    console.log(email)
    // const title = 'signin'
    return res.render('admin/pages/otp.verification.ejs', {email:email})
}

export { verifcationAdmin };