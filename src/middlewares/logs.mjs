import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileName = new Date().toDateString()
const logFilePath = path.join(__dirname, `../../public/logs/${fileName}.json`);

// Middleware function to log request and response details
 async function requestLogger(req, res, next) {
    const start = Date.now();

    // Log request details
    const logRequest = async () => {
        const logEntry = {
            timestamp: new Date().toISOString(),
            method: req.method,
            url: req.originalUrl,
            statusCode: res.statusCode,
            duration: Date.now() - start
        };

        try {
            // Read existing logs
            let logs = [];
            try {
                const data = await fs.readFile(logFilePath, 'utf8');
                logs = JSON.parse(data);
            } catch (err) {
                if (err.code !== 'ENOENT') {
                    console.error('Error reading log file:', err);
                    throw err;
                }
            }

            // Add new log entry
            logs.push(logEntry);

            // Write updated logs to file
            await fs.writeFile(logFilePath, JSON.stringify([logs, null, 2]), 'utf8');
        } catch (err) {
            console.error('Error writing log file:', err);
        }
    };

    // Log response details after response is sent
    const logResponse = () => {
        logRequest();
    };

    // Attach logging functions to the response
    res.on('finish', logResponse);
    logRequest(); // Log request immediately

    next();
}


export default requestLogger;