const {Sequelize} = require("@sequelize/core")

const sequelize = new Sequelize({
    database : "basket",
    dialect : "mysql",
    host : "localhost",
    port : "3306",
    username : "root",
    password : "root",
    logging : false
})
sequelize.authenticate().then(
    console.log("db connected")
).catch(err=>{
    console.log(err?.message);
})

module.exports = {sequelize}