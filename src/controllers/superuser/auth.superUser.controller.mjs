
// import { SuperUser} from  '../../models/superuser.model.mjs';
// import checkPassword from '../../utils/password.check.hash.mjs';
// import { getTokenWEB } from '../../utils/jwt.mjs';

function getAuthSuperUserController(req, res){
        return res.status(200).json({msg:'get Auth SuperUser Controller'})
}

async function postAuthSuperUserController(req, res) {
    return res.status(200).json({msg:'post Auth SuperUser Controller'})
    }

export {getAuthSuperUserController, postAuthSuperUserController};