import mongoose from 'mongoose'

const educator = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender:{
        type:String,
        enum: ['Male', 'Female', 'Trans'],
    },
    centerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Center',
    },
    email :{
        type: String,
        require: true,
        unique: true
    },
    isVerified :{
        type: Boolean,
        require:true,
        default:false
    },
    isLoggin :{
        type: Boolean,
        default:false
    },
    lastLogin: String,
    otp: Number,
    dob: String,
    phoneNumber: String,
},{timestamps:true})

const Educator = mongoose.model('Educator', educator)

export { Educator };