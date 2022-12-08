"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      response.belongsTo(models.marketPlace, { foreignKey: "marketPlaceId" });
      response.belongsTo(models.user), { foreignKey: "userId" };
    }
  }
  response.init(
    {
      response: { type: DataTypes.TEXT, allowNull: false },
      imageUrl: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "response",
    }
  );
  return response;
};
