import mongoose from 'mongoose'

// mongoose.Collection('mkcl')

const student = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Trans'],
        require: true
    },
    centerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Center',
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isLoggin: {
        type: Boolean,
        default: false
    },
    lastLogin: String,
    otp: Number,
    dob: String,
    phoneNumber: String,
}, { timestamps: true, })

const Student = mongoose.model('Student', student)

export default Student;