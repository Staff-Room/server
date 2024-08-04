
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

// Routes declarations
import educatorRoute from './routes/educator.routes.mjs';
import superUserRoute from './routes/superuser.routes.mjs';
import adminRoute from './routes/admin.routes.mjs';
import studentRoute from './routes/student.routes.mjs';

// Middlewares declarations
import educatorMiddleware from './middlewares/educatore.middleware.mjs';
import studentMiddleware from './middlewares/student.middleware.mjs';
import adminMiddleware from './middlewares/admin.middleware.mjs';

// App configurations
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(compression());

app.use(helmet.contentSecurityPolicy({
  directives: {
    "default-src": ["'self'"],
    "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    // Add other directives as needed
  },
}));

// Set up rate limiter: maximum of twenty requests per minute
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 120,
  message: 'Too many requests, please try again later.',
  headers: true,
});

// Apply rate limiter to all requests
app.use(limiter);

// Request logger (uncomment if needed)
// import requestLogger from '../src/middlewares/logs.mjs';
// app.use(requestLogger);

app.use(cookieParser());


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/admin',  adminRoute);
app.use('/superuser', superUserRoute);
app.use('/api/educator', educatorMiddleware, educatorRoute);
app.use('/api/student', studentMiddleware, studentRoute);

// Uncomment and use if needed
// app.get('/', (req, res) => {
//     res.send('hello world for app');
// });

export default app;
