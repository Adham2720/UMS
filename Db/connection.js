import { Sequelize, DataTypes } from 'sequelize';
export const sequelize = new Sequelize('postgres_rzgy', 'postgres_rzgy_user', 'C2SZt0qfsWdKYQSZUEKRCN5tAcwE5DU7', {
    host:'dpg-ckeileunpffc73b4h1hg-a',
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