import jsonwebtoken from "jsonwebtoken";
const secret = "patu@123"

function getToken(id, email, is_verified, time) {
    return jsonwebtoken.sign({
        id:id,
        email:email,
        is_verified:is_verified,
        time:time
    },secret)
}

function getTokenWEB(username) {
    return jsonwebtoken.sign({
        username:username
    },secret, {expiresIn: '1hr'})
}


// console.log(getToken())


// function verifyToken(token){
//     if (!token) return null;
//     try{
//     return jsonwebtoken.verify(token, secret) 
//     }
//     catch (error){
//         if (error instanceof jsonwebtoken.TokenExpiredError) {
//             console.error('Token has expired');
//             return null;
//           } else {
//             console.error('Token verification failed:', error);
//             return null;
//           }
//     }
// }

function verifyToken(token) {
    if (!token) return null;
    
    try {
        return jsonwebtoken.verify(token, secret);
    } catch (error) {
        if (error instanceof jsonwebtoken.TokenExpiredError) {
            console.error('Token has expired');
            return null;
        } else if (error instanceof jsonwebtoken.JsonWebTokenError) {
            console.error('Token verification failed:', error.message);
            return null;
        } else {
            console.error('An unknown error occurred:', error.message);
            return null;
        }
    }
}

export {getToken, verifyToken, getTokenWEB};