
import app from "./app.mjs";
import connectDB from "./db/connectDB.mjs";

// connection to database
connectDB()


// express is start learning
app.listen(8000, (req, res) =>{
    console.log(`is connected to port 8000`)
})