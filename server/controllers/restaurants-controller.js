const restaurantsService = require("../services/restaurants-service");

class RestaurantsController{
    async addRestaurants(req,res,next){
        try{
            const restaurants = req.body
            const createdRestaurants = restaurantsService.addRestaurants(restaurants)

            return res.json({title:"ресторан створено", createdRestaurants})
        }catch(err){
            console.log(err);
        }
    }
    async getRestaurantss(req,res,next){
        try{
            const Restaurantss = await restaurantsService.getRestaurantss()

            return res.json(Restaurantss)
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = new RestaurantsController()