const { Op } = require("@sequelize/core");
const { Product } = require("../model/product.model");
const { Products } = require("../model/user.model");

async function main(parentId=null) {
    if(parentId == null) return console.log("please enter user Id");

    const product = await Products.findAll({
        where : {userId : parentId},
        attributes : {
            exclude : ["id", "userId","updatedAt", "createdAt"]
        },
        raw : true
    })

    const products = await Product.findAll({
        where : {
            id: {
                [Op.in] : [...product.map(value => {return value.productId})]
            }
        },
        raw : true
    })
    
    if(product.length ==0) return console.log("user not found");
    else console.log(products);
}
module.exports = {main}