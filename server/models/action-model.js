const { Schema,model } = require("mongoose")

const ActionSchema = new Schema({
    key: {type:Number},
    id:{type: String},
    title:{type:String},
    description:{type: String},
    img:{type: String},
    imgWide:{type: String},
    html:{type: String},
    productInPromotion:[String]
})

module.exports = model('Action',ActionSchema)

/*
 "img":"https://cdn.sushi-master.ua/BANNERS/SUSHI-MASTER/763250D1-05E6-11EE-A584-8598125AB601-mobile.png?alt=media&token=d9f4665c-6710-4992-8798-46dbc9165c38}&w=1065&h=600&format=webp&mode=fit&q=60",
            "imgWide":"https://cdn.sushi-master.ua/BANNERS/SUSHI-MASTER/1CACD5D1-05E6-11EE-A584-8598125AB601-web.png?alt=media&token=4109f454-91ba-428e-8104-9f1495535657}&w=1280&h=600&format=auto&mode=fit&q=60",
            "id":"superakciya-kupujte-set-otrimujte-rol-u-podarunok",
            "key":2,
            "title":"СУПЕРАКЦІЯ🔥 Купуйте сет, отримуйте рол у подарунок!",
            "description":"Увага любителям японської кухні! Ми раді повідомити вам про нашу нову акцію - купуйте сет, отримуйте рол у подарунок!",
            "productInPromotion":["set-same-te-new","set-vigidnij-new","set-simejnij-new","set-sakura-new"],
            "html":"<p>Хочемо поділитись з Вами захоплюючою новиною: у нас активовано Програму Лояльності!</p> <p>Хочемо поділитись з Вами захоплюючою новиною: у нас активовано Програму Лояльності!</p> <p><strong> Хочемо поділитись з Вами захоплюючою новиною: у нас активовано Програму Лояльності!</strong></p>"*/