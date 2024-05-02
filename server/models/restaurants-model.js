const { Schema,model } = require("mongoose")

const RestaurantsSchema = new Schema({

    id:{type: String},
    description:{type: String},
    timetakeaway:[String],
    timedelivery:[String],
    coords:{type:String}
})

module.exports = model('Restaurants',RestaurantsSchema)

/*
"id":"kyiv-36",
            "name":"Київ-36",
            "description":"Київ, пр-т. Леся Курбаса, 6Г",
            "timetakeaway":["11:00","22:05"],
            "timedelivery":["11:00","21:45"],
            "coords":"33111"
*/