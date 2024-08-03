import mongoose, { Types } from 'mongoose'
// import { Educator } from './educator.model.mjs';

const center = new mongoose.Schema({
    center_Name :{
        type: String,
        
    },
    center_code:{
        type:String,
        require:true,
        unique:true,
    },
    center_Address :{
        type: String,
        require: true,
    },
    educatores :{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Educator',
        require: true,
      
    },
    students :{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Student',
        require: true,
    },
    Center_email :{
        type: String,
        require: true,
        unique: true
    },
    is_verified :{
        type: Boolean,
        default: false,
    },
    Start_date :{
        type: String,
    },
    phoneNumber:{
        type:Number,

    }
},{timestamps:true})

const Center = mongoose.model('Center', center)

export { Center };