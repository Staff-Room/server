import { Log } from "../../models/log.model.mjs";

async function getDashboardSuperUserController(req, res){
    try {
        const logs = await Log.find()
        return res.render('superuser/pages/dashboard',{logs})
    } catch (error) {
        console.log(error)
    }

}

export {getDashboardSuperUserController};