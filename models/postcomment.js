'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Post, {as:'post'})
      this.belongsTo(models.User, {as: 'poster'});
    }
  };
  postComment.init({
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'posts'
        },
        key: 'id'
      },
      allowNull: false
    },
    posterId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'users'
        },
        key: 'id'
      },
      allowNull: false
    },
    content: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'PostComment',
  });
  return PostComment;
};