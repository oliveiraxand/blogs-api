'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'blog_posts',
          key: 'id'
        }
      },
      category_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        }
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
