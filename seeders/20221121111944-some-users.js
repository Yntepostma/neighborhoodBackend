"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        userName: "Kouwe Arie",
        firstName: "Willem",
        lastName: "De Vries",
        password: bcrypt.hashSync("abcd", 10),
        emailAddress: "kouwearie@hotmail.com",
        phoneNumber: 612345678,
        neighborhoodId: 1,
      },
      {
        userName: "Tante Sjaan",
        firstName: "Tante",
        lastName: "Sjaan",
        password: bcrypt.hashSync("abcd", 10),
        emailAddress: "tantesjaan@hotmail.com",
        phoneNumber: 657857857,
        neighborhoodId: 2,
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
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
