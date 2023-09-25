import { Sequelize, DataTypes } from 'sequelize';
import {morganDev} from "../src/router.js";
export const sequelize = new Sequelize('postgres_ums', 'postgres_ums_user', 'UwGUJmrW8QvFdmZj0PsuOgZlWlY8Gff5', {
  host: 'dpg-ck871gg8elhc73ebv7s0-a',
  port:5432,
  dialect:'postgres'
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