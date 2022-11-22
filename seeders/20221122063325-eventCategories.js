"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("eventCategories", [
      {
        eventId: 1,
        categoryId: 1,
      },
      {
        eventId: 1,
        categoryId: 2,
      },
      {
        eventId: 2,
        categoryId: 5,
      },
      {
        eventId: 2,
        categoryId: 6,
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
