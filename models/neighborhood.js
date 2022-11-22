"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class neighborhood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      neighborhood.hasMany(models.user, { foreignKey: "neighborhoodId" });
      neighborhood.hasMany(models.event, { foreignKey: "neighborhoodId" });
      neighborhood.hasMany(models.marketPlace, {
        foreignKey: "neighborhoodId",
      });
      // define association here
    }
  }
  neighborhood.init(
    {
      postal: { type: DataTypes.STRING, allowNull: false },
      council: { type: DataTypes.STRING, allowNull: false },
      neighborhood: { type: DataTypes.STRING, allowNull: false },
      area: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "neighborhood",
    }
  );
  return neighborhood;
};
