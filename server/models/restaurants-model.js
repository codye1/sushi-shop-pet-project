const { Schema,model } = require("mongoose")

const RestaurantsSchema = new Schema({

    id:{type: String},
    description:{type: String},
    timetakeaway:[String],
    timedelivery:[String],
    coords:{type:String}
})

module.exports = model('Restaurants',RestaurantsSchema)

