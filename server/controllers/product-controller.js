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

            const {title} = req.query
            if (title) {
                console.log(title);
                const filteredProd = products.filter(item=>item.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
                return res.json(filteredProd)
            }
            const {type} = req.query
            if (type) {
                console.log(type);
                const filteredProd = products.filter(item=>item.type.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
                return res.json(filteredProd)
            }


            return res.json(products)
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = new ProductController()