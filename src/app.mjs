import express, { urlencoded } from "express";

// routes declrataions 
import educatorRoute from './routes/educator.routes.mjs'
import superUserRoute from "./routes/superuser.routes.mjs";
import adminRoute from "./routes/admin.routes.mjs";
import studentRoute from "./routes/student.routes.mjs";
import educatorMiddleware from "./middlewares/educatore.middleware.mjs";
import studentMiddleware from "./middlewares/student.middleware.mjs";
import adminMiddleware from "./middlewares/admin.middleware.mjs";
import superUserMiddleware from "./middlewares/superuser.middleware.mjs";

// app need for configerations
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);


const app = express()
app.set('view engine', 'ejs');

app.use(urlencoded ( {extends :false}))
app.use(express.static(path.join(__dirname,'public')))
// app.use(apiRequestEducator)

// routes
app.use('/admin',adminRoute)
app.use('/superuser',superUserMiddleware, superUserRoute)
app.use('/api/educator', educatorMiddleware ,educatorRoute)
app.use('/api/student',studentMiddleware, studentRoute)

// app.get('/', (req, res)=>{
//     res.send('hello world for app')
// })


export default app;