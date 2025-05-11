const {DataTypes}=  require('sequelize');
const sequelize = require('../config/db.js');   
 
const User = sequelize.define('user', {
    
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps:true,
    tableName: 'users'
});

module.exports = User;