const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      field: 'post_id',
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'blog_posts',
        key: 'id'
      }
    },
    categoryId: {
      field: 'category_id',
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true
  })
  PostCategory.associate = (models) => {
    PostCategory.belongsToMany(models.BlogPost, { 
      foreignKey: 'postId', as: 'blog_posts' });
    PostCategory.belongsToMany(models.Category, { 
      foreignKey: 'categoryId', as: 'categories' });
  };
  PostCategory.associate = (models) => {

    models.BlogPost.belongsToMany(models.Category, {

      as: 'categories',

      through: PostCategory,

      foreignKey: 'categoryId', // se refere ao id de Book na tabela de `users_books`

      otherKey: 'postId', // se refere a outra chave de `users_books`

    });

    models.Category.belongsToMany(models.BlogPost, {

      as: 'blogPosts',

      through: PostCategory,

      foreignKey: 'postId', // se refere ao id de User na tabela de `users_books`

      otherKey: 'categoryId',

    });

  };
  return PostCategory 
}

module.exports = PostCategoryModel;