const { Schema,model } = require("mongoose")

const ProductSchema = new Schema({
    key:{type:Number,unique:true,require:true},
    id:{type: String},
    type:{type:String},
    title:{type: String},
    body:{type:String},
    discount:{type: Number},
    price:{type: Number},
    img:{type: String},
    atributes:{type: String},
    labels:[
        {
            title:{type: String},
            background:{type: String},
            color:{type: String}
        }
    ],
    harch:{
        weight:{type: Number},
        fats:{type: Number},
        squirrels:{type: Number},
        carbohydrates:{type: Number},
        dung:{type: Number}
    },
    additions:[String],
    sklad:[String]
})

module.exports = model('Product',ProductSchema)
