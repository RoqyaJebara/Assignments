import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: false
    } : false,  
});

pool.connect().then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.error('Database connection error:', err.stack);
});
//to check if the connection is successful

//vip and security

export const query = (text, params) => pool.query(text, params)
export default pool;