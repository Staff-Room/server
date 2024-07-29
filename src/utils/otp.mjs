import { authenticator, totp} from 'otplib';


// function getOTP(){
//     const secret = authenticator.generateSecret(32);
//     const token = totp.generate(secret);
//     return {token, secret}
// }
// const {token, secret} = getOTP()
// console.log(token, secret)

function verifyOTP(token, secret){
    const isValid = totp.check({ token, secret });
    return isValid
}

console.log(verifyOTP(678831, 'GYJCENYIFI7WC2CNC4WVIWAZF5SDQBRONVIUISI3FMSES5TALVYA'))