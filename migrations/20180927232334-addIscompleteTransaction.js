'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.addColumn('Transactions', 'isComplete', Sequelize.BOOLEAN );
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.removeColumn('Transactions', 'isComplete');
    
  }
};
