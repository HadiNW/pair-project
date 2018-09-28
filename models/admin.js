'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
     
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
      
    }
  }, {});
  Admin.associate = function(models) {
    // associations can be defined here
  };
  return Admin;
};