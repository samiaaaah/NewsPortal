const {DataTypes}=  require('sequelize');
const sequelize = require('../config/db.js');


const Category = sequelize.define('category', {
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
},{
    timestamps:true,
});

module.exports = Category;