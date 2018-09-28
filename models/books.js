'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    CategoryId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    stock:  {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    image: DataTypes.TEXT
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsTo(models.Category)
    Book.belongsToMany(models.Transaction, { through: models.Transaction_Detail })
  };
  return Book;
};