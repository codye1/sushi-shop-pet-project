const productModel = require("../models/product-model")

class ProductService{

    async addProduct(product){
        const createdProduct = await productModel.create(product)
    }
    async getProducts(){
        const products = await productModel.find()

        return products
    }
}

module.exports = new ProductService()