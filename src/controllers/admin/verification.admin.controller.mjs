import { verifyToken } from "../../utils/jwt.mjs";



function getverifcationAdmin(req, res){
    const email = req.cookies['email'];
    console.log(email)
    if (!email) return res.redirect('/admin');

    const token =  req.query.token
    if (!token) return res.render('admin/pages/verification.ejs', { email:email});
    console.log(token)
    res.cookie('mkcl_token',token) 

    try {
        const check = verifyToken(token)
        if(!check) return res.redirect('/admin/verification',{ email:email});
        return res.redirect('/admin/dashboard')
    } catch (error) {
        console.log(error)
        return res.redirect('/admin/verification', {error:error, email:email})
    }
    // console.log(email)
    // const title = 'signin'
}

function postverifcationAdmin(req, res){
    const token =  req.query.token
    req.cookie('token') = token
    console.log(token)
    const check = verifyToken(token)
    if (!check) returnres.redirect('/admin'); 
    return res.redirect('admin/dashboard')
}

export { getverifcationAdmin ,postverifcationAdmin };