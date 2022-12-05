"use strict";
const { Model } = require("sequelize");
const neighborhood = require("./neighborhood");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      event.belongsTo(models.user, { foreignKey: "userId", as: "owner" });
      event.belongsTo(models.neighborhood, { foreignKey: "neighborhoodId" });
      event.belongsToMany(models.user, {
        through: "attendees",
        foreignKey: "eventId",
        as: "attendee",
      });
      event.belongsToMany(models.category, {
        through: "eventCategories",
        foreignKey: "eventId",
      });
      // define association here
    }
  }
  event.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      longtitude: { type: DataTypes.FLOAT, allowNull: false },
      latitude: { type: DataTypes.FLOAT, allowNull: false },
      date: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
