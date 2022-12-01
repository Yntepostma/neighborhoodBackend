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
        longtitude: 4.865,
        latitude: 52.3669,
        date: new Date("December 10, 2022 12:00:00"),
        neighborhoodId: 1,
        userId: 1,
      },
      {
        title: "Bootcamp",
        description: "Weekly bootcamp in RembrandtPark",
        imageUrl:
          "http://tunturi.org/Blogs/2021-08/bootcamp-full-body-workout.jpg",
        longtitude: 4.8506,
        latitude: 52.3651,
        date: new Date("December 11, 2022 10:00:00"),
        neighborhoodId: 1,
        userId: 1,
      },
      {
        title: "Yoga class in the Park",
        description: "Weekly yoga class in RembrandtPark",
        imageUrl:
          "https://www.centralpark.com/downloads/9156/download/2020-central-park-yoga-social-distance-4.jpg?cb=79bdbce65f93d92c42d788ca745bbd20",
        longtitude: 4.8461,
        latitude: 52.3647,
        date: new Date("December 11, 2022 10:00:00"),
        neighborhoodId: 1,
        userId: 1,
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
