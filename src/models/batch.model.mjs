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
    center:{
        // type:Types.ObjectId.bind.Center,
        type:String,
        require:true
    },
    creator:{
        type:String,
        require:true
    },
    educators:{
        // type:Types.ObjectId.bind.Educator,
        type:String,
        require:true
    },
    students:{
        // type: Types.ObjectId.Student,
        type:String,
        require:true
    },
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