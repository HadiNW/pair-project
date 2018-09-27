'use strict';
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    stock: DataTypes.INTEGER,
    image: DataTypes.TEXT
  }, {});
  Books.associate = function(models) {
    // associations can be defined here
  };
  return Books;
};