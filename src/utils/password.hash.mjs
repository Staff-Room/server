import bcrypt from 'bcrypt'
const saltRounds = 10;

async function hashPassword(password) {
    console.log(password)
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (err) {
        console.error('Error hashing password:', err);
        throw err;
    }
}

// Example usage
// (async () => {
//     const password = 'yourPasswordHere';
//     console.log(password)
//     try {
//         const hashedPassword = await hashPassword(password);
//         console.log('Hashed Password:', hashedPassword);
//     } catch (err) {
//         console.error('Failed to hash password:', err);
//     }
// })();

console.log( await hashPassword('Patu@123'))


