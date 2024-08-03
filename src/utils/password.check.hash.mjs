import bcrypt from 'bcrypt'


async function checkPassword(password, hash) {
    try {
        const match = await bcrypt.compare(password, hash);
        return match;
    } catch (err) {
        console.error('Error checking password:', err);
        throw err;
    }
}

// Example usage
// (async () => {
//     const password = 'patu@123';
//     const hash = '$2b$10$6pqpWFHB3SzmqA6hJ66lQ.NXXtHXy3kUTYmnwNIn9uTeRnpZRjhb6'; // Replace with the actual hashed password

//     try {
//         const isMatch = await checkPassword(password, hash);
//         if (isMatch) {
//             console.log('Password matches!');
//         } else {
//             console.log('Password does not match.');
//         }
//     } catch (err) {
//         console.error('Failed to check password:', err);
//     }
// })();

export default checkPassword;