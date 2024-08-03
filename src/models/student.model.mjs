import mongoose from 'mongoose'

// mongoose.Collection('mkcl')

const student = new mongoose.Schema({
    first_Name :{
        type: String,
        require: true,
    },
    last_Name :{
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
},{timestamps:true, })

const Student = mongoose.model('Student', student)

export default Student;