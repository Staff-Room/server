import jsonwebtoken from "jsonwebtoken";
const secret = "patu@123"

function getToken(id, email) {
    return jsonwebtoken.sign({
        id: id,
        email:email,
    },secret)
}

// console.log(getToken())


function verifyToken(token){
    if (!token) return null;
    return jsonwebtoken.verify(token, secret) 
}
// console.log(verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdHVAZ21haWwuY29tIiwibmFtZSI6InByYXRoYW1lc2ggbW9yZSIsImlhdCI6MTcyMjEwNjEwN30.ESjAOeSMne4qQW2LdFrHveA0Su_sJSoouwsc_pcI_zU'))

export {getToken, verifyToken};