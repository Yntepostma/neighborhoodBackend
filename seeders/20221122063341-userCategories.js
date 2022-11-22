"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("userCategories", [
      {
        userId: 1,
        categoryId: 1,
      },
      {
        userId: 1,
        categoryId: 2,
      },

      {
        userId: 1,
        categoryId: 6,
      },
      {
        userId: 2,
        categoryId: 4,
      },
      {
        userId: 2,
        categoryId: 5,
      },

      {
        userId: 2,
        categoryId: 3,
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
    await queryInterface.bulkDelete("userCategories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
