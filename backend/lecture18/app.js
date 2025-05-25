import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoutes from './routes/auth.js';
import { not } from 'joi';
const app = express();

app.use(helmet());//midleware for security
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN ,
        methods: ['GET', 'POST', 'PUT','patch', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));//middleware for cross-origin resource sharing
//backend fronend diff domains requird to acsess first level secuirty
//white listed domains

app.use(morgan(
    process.env.NODE_ENV === 'production' ? 'combined' : 'dev'
));
//DEVELOPMENT //DEPLOYMENT
//COMPINE //DEV
//PRODUCTION
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth')
app.get('/health', (req, res) => {
    res.json({ message: 'OK' });
});

app.use(notFound);
app.use(errorHandler);

export default app;

