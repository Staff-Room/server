import mongoose from 'mongoose'

const educator = new mongoose.Schema({
    first_Name :{
        type: String,
        require:true
        
    },
    last_Name :{
        type: String,
        require:true
        
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
        require:true
    },
    dataOfBirth :{
        type: String,
        require:true
    },
    phoneNumber:{
        type:Number,
        require:true        
    }
},{timestamps:true})

const Educator = mongoose.model('Educator', educator)

export { Educator };