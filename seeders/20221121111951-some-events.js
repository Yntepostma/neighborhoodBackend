"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("events", [
      {
        title: "Montly yard sale",
        description:
          "Montly recurring event where people can share and trade goods and services",
        imageUrl:
          "https://clipartix.com/wp-content/uploads/2016/09/Free-yard-sale-clip-art-clipart.jpeg",
        longtitude: 52.3669,
        latitude: 4.865,
        date: new Date("December 10, 2022 12:00:00"),
        neighborhoodId: 1,
        userId: 1,
      },
      {
        title: "Yoga class in the Park",
        description: "Weekly yoga class in RembrandtPark",
        imageUrl:
          "https://www.centralpark.com/downloads/9156/download/2020-central-park-yoga-social-distance-4.jpg?cb=79bdbce65f93d92c42d788ca745bbd20",
        longtitude: 52.3647,
        latitude: 4.8461,
        date: new Date("December 11, 2022 10:00:00"),
        neighborhoodId: 2,
        userId: 2,
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
    await queryInterface.bulkDelete("events", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
