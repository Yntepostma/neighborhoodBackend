"use strict";

const { query } = require("express");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Select",
      },
      {
        name: "Goods and Services",
      },
      {
        name: "Social interaction",
      },
      {
        name: "Volunteer",
      },
      {
        name: "Help and Support",
      },
      {
        name: "Sports and Exercise",
      },
      {
        name: "Yoga & Spirituality",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
