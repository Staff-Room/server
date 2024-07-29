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
import compression from "compression";
import helmet from "helmet";
import RateLimit from "express-rate-limit";

// app need for configerations
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

const app = express()
app.use(compression());
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
      },
    }),
  );
  // Set up rate limiter: maximum of twenty requests per minute
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
// Apply rate limiter to all requests
app.use(limiter);
app.set('view engine', 'ejs');

app.use(urlencoded ( { extended: true }))
app.use(express.static(path.join(__dirname,'public')))
// app.use(apiRequestEducator)

// routes
app.use('/admin',adminMiddleware,adminRoute)
app.use('/superuser',superUserMiddleware, superUserRoute)
app.use('/api/educator', educatorMiddleware ,educatorRoute)
app.use('/api/student',studentMiddleware, studentRoute)

// app.get('/', (req, res)=>{
//     res.send('hello world for app')
// })


export default app;