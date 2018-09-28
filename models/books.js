'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    stock: DataTypes.INTEGER,
    image: DataTypes.TEXT
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsTo(models.Category)
    Book.belongsToMany(models.Transaction, { through: models.Transaction_Detail })
  };
  return Book;
};