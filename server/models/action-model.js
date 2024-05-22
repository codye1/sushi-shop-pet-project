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

