import mongoose from 'mongoose';

// Define the schema for the Center model
const centerSchema = new mongoose.Schema({
    centerName: {
        type: String,
        required: true,  // Added required
    },
    centerId: {
        type: String,    // Keeping as String based on your structure
        required: true,  // Changed 'require' to 'required'
        unique: true,
    },
    centerAddress: String,
        
    centerAdmin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin', // Changed 'require' to 'required'
    }],
    educators: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Educator',
         // Changed 'require' to 'required'
    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
      // Changed 'require' to 'required'
    }],
    batches: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Batch',
         // Changed 'require' to 'required'
    }],
    centerEmail: {
        type: String,
        required: true,  // Changed 'require' to 'required'
        unique: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    startDate: {
        type: Date,      // Changed to Date type
    },
    phoneNumber: {
        type: Number,
    }
}, { timestamps: true });

// Create the Center model
const Center = mongoose.model('Center', centerSchema);

export { Center };
