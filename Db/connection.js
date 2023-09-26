import { Sequelize, DataTypes } from 'sequelize';
import { config } from 'dotenv';
config();
export const sequelize = new Sequelize(process.env.postgres_ums, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host:process.env.HOST,
    port:process.env.DB_PORT,
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