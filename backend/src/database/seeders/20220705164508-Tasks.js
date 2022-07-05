module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Tasks',
      [
        {
          id: 1,
          content: 'Lavar o carro',
          status: 'done',
          userId: 1,
          published: new Date('2011-08-01T19:58:00.000Z'),
          updated: new Date('2011-08-01T19:58:51.000Z'),
        },
        {
          id: 2,
          content: 'Codar',
          status: 'todo',
          userId: 1,
          published: new Date('2011-08-01T19:58:00.000Z'),
          updated: new Date('2011-08-01T19:58:51.000Z'),
        },
        {
          id: 3,
          content: 'Passear com o cachorro',
          status: 'progress',
          userId: 1,
          published: new Date('2011-08-01T19:58:00.000Z'),
          updated: new Date('2011-08-01T19:58:51.000Z'),
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
