import mongoose from 'mongoose'

const admin = new mongoose.Schema({
    first_Name :{
        type: String,
        
    },
    last_Name :{
        type: String,
        
    },
    gender:{
        type:String,
        enum: ['Male', 'Female', 'Trans'],
        
    },
    email :{
        type: String,
        require: true,
        unique: true
    },
    is_verified :{
        type: Boolean,
        default: false,
    },
    dataOfBirth :{
        type: String,
       
    },
    phoneNumber:{
        type:Number,
           
    }
},{timestamps:true})

const Admin = mongoose.model('Admin', admin)

export { Admin };