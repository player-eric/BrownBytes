'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OfferComments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      offerId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Offers'
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
        allowNull: false
      },
      posterId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
        allowNull: false
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OfferComments');
  }
};