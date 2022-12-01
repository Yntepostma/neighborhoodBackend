"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class marketPlace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      marketPlace.belongsTo(models.neighborhood, {
        foreignKey: "neighborhoodId",
      });
      marketPlace.belongsTo(models.user, { foreignKey: "userId" });
      marketPlace.hasMany(models.response, { foreignKey: "marketPlaceId" });
      // define association here
    }
  }
  marketPlace.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      imageUrl: DataTypes.STRING,
      description: DataTypes.TEXT,
      longtitude: { type: DataTypes.FLOAT, allowNull: false },
      latitude: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
      sequelize,
      modelName: "marketPlace",
    }
  );
  return marketPlace;
};
