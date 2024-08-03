
import { SuperUser} from  '../../models/superuser.model.mjs';
import checkPassword from '../../utils/password.check.hash.mjs';
import { getTokenWEB } from '../../utils/jwt.mjs';

function getAuthSuperUserController(req, res){
        return res.render('superuser/superuser')
}

async function postAuthSuperUserController(req, res) {
        const { username, password } = req.body;
        
        if (!username || !password) {
            console.log('Username or password is missing');
            return res.redirect('/superuser');
        }
        
        console.log(`Attempting login for user: ${username}`);
        
        try {
            const user = await SuperUser.findOne({ username: username });
            
            if (!user) {
                console.log(`User not found: ${username}`);
                return res.redirect('/superuser');
            }
            
            console.log(`User found: ${user.username}`);
            
            // Check if user password is available
            if (!user.password) {
                console.log('User password is missing in the database');
                return res.redirect('/superuser');
            }
            
            const passwordMatch = await checkPassword(password, user.password);
            
            if (!passwordMatch) {
                console.log('Password does not match');
                return res.redirect('/superuser');
            }
            
            const token = getTokenWEB(username);
            console.log(`Token generated: ${token}`);
            
            res.cookie('token', token, { httpOnly: true, secure: true }); // Secure and HttpOnly for better security
            return res.redirect('/superuser/dashboard');
        } catch (error) {
            console.log('Error during authentication:', error);
            return res.redirect('/superuser');
        }
    }

export {getAuthSuperUserController, postAuthSuperUserController};