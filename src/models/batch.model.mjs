import mongoose from "mongoose";

const batch = new mongoose.Schema({
    name:String,
    batchId:{
        type:String,
        require:true, 
        unique:true
    },
    center:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Center',
        require:true
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    educators:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Educator',
    }],
    students:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student',
    }],
    subject:String,
    start_at:String,
    end_at:String,
    
},{timestamps:true})

const Batch = mongoose.model('Batch', batch)

export { Batch };