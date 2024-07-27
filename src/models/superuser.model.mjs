import mongoose from 'mongoose'

const superUser = new mongoose.Schema({
    username :{
        type: String,
        require:true
    },
    password :{
        type: String,
        require:true
    }
},{timestamps:true})

const SuperUser = mongoose.model('SuperUser', superUser)

export { SuperUser };