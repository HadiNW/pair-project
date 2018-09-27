'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    email: {
      type: DataTypes.STRING,
      notEmpty: true,
      isEmail: true
    },
    address: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    balance: DataTypes.INTEGER,
    password: {
      type: DataTypes.STRING,
      notEmpty: true
  }}, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};