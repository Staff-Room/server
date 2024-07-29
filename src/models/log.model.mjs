import mongoose from 'mongoose';

const log = new mongoose.Schema({
    user:{
        type:String,
        require:true,
    },
    where:{
        type:String,
        require:true
    },
    host:{
        type:String,
        require:true
    },
    protocol:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true,
    },
    code:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true,
    },
    url:{
        type:String,
        require:true
    },
    error:{
        type:String,
        require:true,
        default:null
    }
}, {timestamps:true})

const Log = mongoose.model('Log', log)

export {Log};