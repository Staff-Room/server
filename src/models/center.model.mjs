import mongoose, { Types } from 'mongoose'
// import { Educator } from './educator.model.mjs';

const center = new mongoose.Schema({
    center_Name :{
        type: String,
        require: true,
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
        type: Types.ObjectId.bind.Educator,
        require: true,
        unique: true
    },
    students :{
        type: Types.ObjectId.bind.Student,
        require: true,
        unique: true
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
        require: true,
        unique: true
    },
    phoneNumber:{
        type:Number,
        require:true        
    }
},{timestamps:true})

const Center = mongoose.model('Center', center)

export { Center };