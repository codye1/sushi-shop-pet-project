const RestaurantsModel = require("../models/restaurants-model")

class RestaurantsService{

    async addRestaurants(Restaurants){
        const createdRestaurants = await RestaurantsModel.create(Restaurants)
    }
    async getRestaurantss(){
        const Restaurantss = await RestaurantsModel.find()

        return Restaurantss
    }
}

module.exports = new RestaurantsService()