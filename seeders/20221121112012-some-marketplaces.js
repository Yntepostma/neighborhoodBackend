"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("marketPlaces", [
      {
        title: "Looking for walking buddy",
        description:
          "Looking for some company to talk to, have a walk of have a coffee during the weekends",
        imageUrl:
          "https://phillypowered.org/wp-content/uploads/2018/08/YEE_5548-20180621-1080x720.jpg",
        neighborhoodId: 1,
        userId: 1,
        longtitude: 4.8506,
        latitude: 52.3655,
      },
      {
        title: "free furniture",
        description:
          "due to moving we are giving a large part of our furniture away. If interested, please let me know",
        imageUrl:
          "https://img.freepik.com/free-vector/home-furniture-set_74855-15461.jpg?auto=format&h=200",
        neighborhoodId: 1,
        userId: 1,
        longtitude: 4.8506,
        latitude: 52.3671,
      },
      {
        title: "offering cleaning services",
        description:
          "available on Tuesday, Wednesday or Friday for house cleaning services",
        imageUrl:
          "https://nextdaycleaning.com/wp-content/uploads/2019/10/carpet-cleaning-hero-imageres2.jpg",
        neighborhoodId: 1,
        userId: 1,
        longtitude: 4.8506,
        latitude: 52.3664,
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
