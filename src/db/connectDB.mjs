// import 'dotenv/config'
import mongoose from "mongoose";

async function connectDB  () {
    try {
        const Instances = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB is connected to this host := ${Instances.connection.host}`)
    } catch (error) {
        console.log(`mongodb connection error ${error}`)
        process.exit(1)
        
    }
}

export default  connectDB;
