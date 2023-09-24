import {sequelize} from '../connection.js'
import { DataTypes } from 'sequelize';
import User from './User.model.js';

const role = sequelize.define('role',{
    id : {
        type :DataTypes.STRING,
        allowNull:false,
        primaryKey: true
    },
    name:{
        type :DataTypes.STRING,
        allowNull:false,
    }

})
role.hasMany(User);
export default role
