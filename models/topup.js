'use strict';
module.exports = (sequelize, DataTypes) => {
  const TopUp = sequelize.define('TopUp', {
    CustomerId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    approvedBy: DataTypes.INTEGER,
    isApproved: DataTypes.BOOLEAN,
    transfer: DataTypes.TEXT
  }, {});
  TopUp.associate = function(models) {
    // associations can be defined here
    TopUp.belongsTo(models.Customer)
  };
  return TopUp;
};