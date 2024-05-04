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
/*
"key":1,
        "type":"sets promotion gourmetschoise",
        "additions":["nabir-imbir-vasabi-1-porc","palichki-dlya-yizhi","soyevyy_sous_brend_40_ml_dopovnennya","nabir-imbir-vasabi-1-porc","palichki-dlya-yizhi","soyevyy_sous_brend_40_ml_dopovnennya"],
        "id": "set-same-te-new",
        "title": "СЕТ САМЕ ТЕ",
        "body":"Склад: Філадельфія з лососем, кранч з креветкою, каліфорнія з лососем в кунжуті, каліфорнія з крабовим міксом в кунжуті, футомакі з лососем (гострий), макі з лососем. Соєвий соус - 200 мл (4 шт). Імбир - 60 г. Васабі - 30 г.",
        "discount": 10,
        "price":"1214 грн",
        "img":"https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/363BAA91-9C9A-11ED-8A53-A79068836E9C-%D0%A1%D0%B0%D0%BC%D0%B5%20%D1%82%D0%B5.png?alt=media&token=7d129db0-89cd-4dee-baa5-32701a781b27&w=800&format=webp&mode=fit&q=59",
        "labels":[
            {"title":"Вибір гурманів","background":"#c72338","color":"white"},
            {"title":"Знижка 10%","background":"red","color":"white"}
        ],
        "attributes":"🌿",
        "harch":{
            "weight":1370,
            "fats":137.19,
            "squirrels":264.67,
            "carbohydrates":477.89,
            "dung":3569.67
        },
        "sklad":["set-same-te-new","set-vigidnij-new","set-simejnij-new","set-sakura-new"]
        */