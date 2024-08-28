const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("../config/db.config");

const Product = sequelize.define("product",{
    name : {
        type: DataTypes.STRING(150),
        allowNull : false
    },
    deck : {
        type: DataTypes.STRING(200),
        allowNull : false,
        defaultValue : "some product"
    },
    price : {
        type: DataTypes.INTEGER,
        allowNull : false
    },
},{timestamps : false , freezeTableName :true})

module.exports = {Product}