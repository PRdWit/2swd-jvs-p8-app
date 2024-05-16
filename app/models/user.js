import {database} from '../database.js';
import {Model, DataTypes} from 'sequelize';

export class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
  // Other model options go here
  sequelize: database, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
});