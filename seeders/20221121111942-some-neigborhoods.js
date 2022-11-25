"use strict";

const neighborhood = require("../neighborhood");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("neighborhoods", [
      {
        postal: "1057PG",
        council: "Amsterdam",
        area: "Overtoomse Veld",
        neighborhood: "Rembrandtpark noord",
      },
      {
        postal: "4823HE",
        council: "Breda",
        area: "Breda-Noord",
        neighborhood: "Overkroeten",
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
