'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class issue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      issue.belongsTo(models.user, {
        foreignKey: 'owner'
      })
      issue.belongsTo(models.user, {
        foreignKey: 'executor'
      })
      issue.belongsTo(models.status, {
        foreignKey: 'status'
      })
    }
  };
  issue.init({
    text: DataTypes.STRING,
    owner: DataTypes.STRING,
    executor: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'issue',
  });
  return issue;
};