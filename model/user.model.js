const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("../config/db.config");
const {Product} = require("./product.model");

const User = sequelize.define("user",{
    email : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    password : {
        type :DataTypes.STRING(120),
        allowNull : false
    }
},{updatedAt : false , freezeTableName : true})
const Products = sequelize.define("products",{
    productId : {
        type: DataTypes.INTEGER,
        references:{
            model : Product,
            key : "id"
        },
        onDelete : "CASCADE"
    },
    userId : {
        type: DataTypes.INTEGER,
        references:{
            model : User,
            key : "id"
        },
        onDelete : "CASCADE"
    }
},{freezeTableName : true})
User.hasMany(Products)

module.exports = {
    User,
    Products
}