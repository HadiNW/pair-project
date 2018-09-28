'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
     
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isEmail: true
      }
     
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    balance: DataTypes.INTEGER,
    password: {
      type: DataTypes.STRING,
      validate :{
        notEmpty: true
      }
     
  }}, {});
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.hasMany(models.TopUp)
  };
  return Customer;
};