import {sequelize} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize
(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  logging: process.env.NODE_ENV==='development'?console.log:false, // Disable logging
  dialectOptions: {
   ssl:process.env.NODE_ENV==='production'
   ?{rejectUnauthorized:true}
   :false,
  },
});

async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database postgres with sequelize has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// async() direct to run without call