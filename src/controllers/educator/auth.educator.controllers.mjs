import { Educator } from '../../models/educator.model.mjs'

async function postAuthEducatorController( req , res){
    const body = req.body;
    const email = body.email
    if (email) {
        const educator = await Educator.findOne({email:body.email})
        if (educator) {
            await educator.updateOne({is_verified:false})
            return res.json({educator,
                "msg":'user is already present'
            })   
        } else{
            const user = await Educator.create({
                email: body.email,
                is_verified:false
            })
            
            return res.json({user,
                "msg":'user created Succesfully'
            }) 
        }    
    } else {
       
            return res.json({'msg':'Plese Enter an input'})
    
    }
    
} 

export { postAuthEducatorController};
