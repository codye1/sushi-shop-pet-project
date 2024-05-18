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

                const filteredProd = products.filter(item=>item.type.toLocaleLowerCase().includes(type.toLocaleLowerCase()))

                return res.json(filteredProd)
            }
            const {id} = req.query
            if (id == "null") {
                return res.json([])
            }
            if (id) {

                let filteredProd  = []


                for (let i = 0; i < id.length; i++) {
                    filteredProd = filteredProd.concat(products.filter(item=>item.id.toLocaleLowerCase().includes(id[i].toLocaleLowerCase())))

                }
                return res.json(filteredProd)
            }

            return res.json(products)
        }catch(err){
            console.log(err);
        }
    }

    async getProductsById(req,res,next){
        try{
            const products = await productService.getProducts()
            const {id} = req.params
            console.log(id.length);
            const filteredProd = products.filter(item=>item.id.toLocaleLowerCase().includes(id.toLocaleLowerCase()))

            return res.json(filteredProd[0])
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = new ProductController()