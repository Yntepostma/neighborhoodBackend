"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("marketPlaces", [
      {
        title: "Looking for company",
        description:
          "Looking for some company to talk to, have a walk of have a coffee during the weekends",
      },
      {
        title: "free furniture",
        description:
          "due to moving we are giving a large part of our furniture away. If interested, please let me know",
      },
      {
        title: "offering cleaning services",
        description:
          "available on Tuesday, Wednesday or Friday for house cleaning services",
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
    await queryInterface.bulkDelete("marketPlaces", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
