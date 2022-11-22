"use strict";
const { Model } = require("sequelize");
const neighborhood = require("./neighborhood");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsTo(models.neighborhood, { foreignKey: "neighborhoodId" });
      user.hasMany(models.event, { foreignKey: "userId" });
      user.hasMany(models.marketPlace, { foreignKey: "userId" });
      user.belongsToMany(models.event, {
        through: "attendees",
        foreignKey: "userId",
      });
      user.belongsToMany(models.category, {
        through: "userCategories",
        foreignKey: "userId",
      });
      // define association here
    }
  }
  user.init(
    {
      userName: { type: DataTypes.STRING, allowNull: false, unique: true },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      profilePicture: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:
          "https://d32ogoqmya1dw8.cloudfront.net/images/serc/empty_user_icon_256.v2.png",
      },
      password: { type: DataTypes.STRING, allowNull: false },
      phoneNumber: { type: DataTypes.INTEGER, allowNull: false },
      emailAddress: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
