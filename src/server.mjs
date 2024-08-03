import 'dotenv/config'
import app from "./app.mjs";
import connectDB from "./db/connectDB.mjs";

// connection to database
connectDB()



// express is start learning
app.listen(process.env.PORT,'0.0.0.0', (req, res) =>{
    console.log(`is connected to port 8000`)
})
