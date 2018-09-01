'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Todos', [{
        title: 'Finish project',
        description: 'cisc4900',
        priority: '10',
        due: '08/27/2018',
        completed: 'false'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Todos', null, {});
  }
};
