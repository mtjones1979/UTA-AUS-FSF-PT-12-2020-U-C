const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true,
          autoIncrement: true,
        },
        trip_budget: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        traveller_amount: {
         type: DataTypes.INTEGER,
         allowNull: true,
        },
      
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip',
      }
    );
    
    module.exports = Trip;