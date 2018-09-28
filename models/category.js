'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Book)
  };
  return Category;
};