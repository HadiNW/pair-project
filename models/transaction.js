'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    date: DataTypes.DATE,
    CustimerId: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
    // Transaction.belongsToMany(models.Transaction_Detail, { through: UserProjects })
    Transaction.belongsToMany(models.Book, { through: models.Transaction_Detail })
  };
  return Transaction;
};