const { sequelize } = require("./config/db.config");
const {Product} = require("./model/product.model");
const { User, Products } = require("./model/user.model");

async function main(){
    await sequelize.sync({force : true})
    const user1 = await User.create({
        email : "X@gmail.com",
        password : "12345"
    })
    const user2 = await User.create({
        email : "Y@gmail.com",
        password : "awasFwqwr"
    })
    await Product.bulkCreate([
        {
            name : "iphone",
            price : 1000
        },
        {
            name : "pc",
            price : 3000
        },
        {
            name : "tv",
            price : 2000
        }
    ])
    await Products.bulkCreate([
        {
            userId : user1.id,
            productId : 1
        },
        {
            userId :  user1.id,
            productId : 2
        },
        {
            userId :  user1.id,
            productId : 3
        },
        {
            userId :  user2.id,
            productId : 3
        },
     
])
    
    console.log(await user1.getProducts({raw : true}));

}
main()
