'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction_Detail = sequelize.define('Transaction_Detail', {
    TransactionId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {});
  Transaction_Detail.associate = function(models) {
    // associations can be defined here
  };
  return Transaction_Detail;
};