import { Sequelize, DataTypes } from 'sequelize';
import {morganDev} from "../src/router.js";
export const sequelize = new Sequelize('postgres', 'postgres', '123', {
    host: 'localhost',
    port:5432,
    dialect:'postgres',

  });

export const connectDB = async () => {
  try {
    
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    await sequelize.sync({alter:true});
    

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};