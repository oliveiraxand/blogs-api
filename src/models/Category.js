const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'categories',
    underscored: true
  })
  // Category.associate = (models) => {
  //   Category.belongsToMany(models.BlogPost, { through: models.PostCategory, foreignKey: 'categoryId', as: 'blog_posts' });
  // };
  return Category;
}

module.exports = CategoryModel;