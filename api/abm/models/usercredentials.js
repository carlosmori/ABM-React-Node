'use strict';
module.exports = (sequelize, DataTypes) => {
  const userCredentials = sequelize.define('userCredentials', {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  userCredentials.associate = function(models) {
    // associations can be defined here
  };
  return userCredentials;
};