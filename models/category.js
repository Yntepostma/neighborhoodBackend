"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      category.belongsToMany(models.event, {
        through: "eventCategories",
        foreignKey: "categoryId",
      });
      category.belongsToMany(models.user, {
        through: "userCategories",
        foreignKey: "categoryId",
      });
      // define association here
    }
  }
  category.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "category",
    }
  );
  return category;
};
