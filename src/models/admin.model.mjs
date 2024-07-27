import mongoose from 'mongoose'

const admin = new mongoose.Schema({
    first_Name :{
        type: String,
        require: true,
    },
    last_Name :{
        type: String,
        require: true,
    },
    username :{
        type: String,
        require: true,
        unique:true,
    },
    password :{
        
        type: String,
        require: true,
    },
    gender:{
        type:String,
        enum: ['Male', 'Female', 'Trans'],
        require:true
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
        require: true,
        unique: true
    },
    phoneNumber:{
        type:Number,
        require:true        
    }
},{timestamps:true})

const Admin = mongoose.model('Admin', admin)

export { Admin };