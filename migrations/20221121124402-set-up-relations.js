"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "neighborhoodId", {
      type: Sequelize.INTEGER,
      references: {
        model: "neighborhoods",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("events", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("events", "neighborhoodId", {
      type: Sequelize.INTEGER,
      references: {
        model: "neighborhoods",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("marketPlaces", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("marketPlaces", "neighborhoodId", {
      type: Sequelize.INTEGER,
      references: {
        model: "neighborhoods",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("marketPlaces", "categoryId", {
      type: Sequelize.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("responses", "marketPlaceId", {
      type: Sequelize.INTEGER,
      references: {
        model: "marketPlaces",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("responses", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "responses",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "neighborhoodId");
    await queryInterface.removeColumn("events", "userId");
    await queryInterface.removeColumn("events", "neighborhoodId");
    await queryInterface.removeColumn("marketPlaces", "userId");
    await queryInterface.removeColumn("responses", "userId");
    await queryInterface.removeColumn("responses", "marketPlaceId");
  },
};
