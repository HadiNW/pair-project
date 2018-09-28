'use strict';
module.exports = (sequelize, DataTypes) => {
  const TopUp = sequelize.define('TopUp', {
    CustomerId: DataTypes.INTEGER,
    amount: {
      type: DataTypes.INTEGER,
      isNumeric: true
    },
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