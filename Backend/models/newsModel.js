const {DataTypes} = require('sequelize');
const sequelize = require('../config/db.js');   
const Category=require('./categoryModel.js');
 
const News = sequelize.define('news', {
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    publisherName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false,
    },  
    categoryId:{    
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Category,
            key: 'id'
        }
    },
    publishedAt:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
},{
    timestamps:true,
    tableName: 'news'
});

//Associations
News.belongsTo(Category, {foreignKey:"categoryId"});
Category.hasMany(News, {foreignKey:"categoryId"});

  
module.exports = News;