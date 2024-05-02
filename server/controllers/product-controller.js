const productService = require("../services/product-service");

class ProductController{
    async addProduct(req,res,next){
        try{
            const product = req.body
            const createdProduct = productService.addProduct(product)

            return res.json({title:"Продукт створено",createdProduct})
        }catch(err){
            console.log(err);
        }
    }
    async getProducts(req,res,next){
        try{
            const products = await productService.getProducts()

            const {titleLike}= req.query
            if (titleLike) {

                return res.json(products.filter(item=>item.title.includes(titleLike)))
            }

            return res.json(products)
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = new ProductController()