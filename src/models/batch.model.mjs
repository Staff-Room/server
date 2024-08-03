import mongoose, { Types } from "mongoose";

const batch = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    batch_code:{
        type:String,
        require:true, 
        unique:true
    },
    center:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Center',
        require:true
    }],
    creator:{
        type:String,
        require:true
    },
    educators:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Educator',
        require:true
    }],
    students:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student',
        require:true
    }],
    subject:{
        type:String,
    },
    start_at:{
        type:String,
        require:true
    },
    end_at:{
        type:String,
        require:true
    },
    
},{timestamps:true})

const Batch = mongoose.model('Batch', batch)

export { Batch };