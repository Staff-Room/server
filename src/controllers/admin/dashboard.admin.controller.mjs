import {Center} from '../../models/center.model.mjs';

async function getdashboardAdminController(req, res) {
    const email = 'mkcl01@gmail.com'
    const centerId = 123
    try {
        const center = await Center.findOne({centerEmail:email} || {centerId:centerId})
        if(!center) return center=null;
        console.log(center)
        return res.status(200).json( center)
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:'internal server error'})
        
    }
    
    
}


export {getdashboardAdminController};
