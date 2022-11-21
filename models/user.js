"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      userName: { type: DataTypes.STRING, allowNull: false },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      profilePicture: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      phoneNumber: { type: DataTypes.INTEGER, allowNull: false },
      emailAddress: { Type: DataTypes.STRING, allowNull: false },
      preferenceId: { type: DataTypes.INTEGER, allowNull: false },
      neighborhoodId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
