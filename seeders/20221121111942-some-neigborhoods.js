"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("neighborhoods", [
      {
        name: "Kinkerbuurt",
        zipcode: "1052-1053",
        city: "Amsterdam",
      },
      {
        name: "Hoofddorppleinbuurt",
        zipcode: "1058-1059",
        city: "Amsterdam",
      },
      {
        name: "Schinkelbuurt",
        zipcode: "1075",
        city: "Amsterdam",
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
    await queryInterface.bulkDelete("neighborhoods", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
