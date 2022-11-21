"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class eventCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      eventCategories.belongsTo(models.category);
      eventCategories.belongsTo(models.event);
      // define association here
    }
  }
  eventCategories.init(
    {
      eventId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "eventCategories",
    }
  );
  return eventCategories;
};
