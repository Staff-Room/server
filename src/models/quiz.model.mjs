import mongoose, { Types } from 'mongoose'

const quiz = new mongoose.Schema({
    domain :{
        type: String,
        require: true,
    },
    subject :{
        type: String,
        require: true,
    },
    level:{
        type:String,
        enum: ['Hard', 'Medium', 'Easy'],
        require:true
    },
    question :{
        type: String,
        require: true,
        unique: true
    },
    multiple_answers :{
        type: String,
        default: false,
    },
    right_answer :{
        type: String,
        require: true,
        unique: true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Educator',
        require: true,
    }
})

const Quiz = mongoose.model('Quiz', quiz)

export { Quiz };