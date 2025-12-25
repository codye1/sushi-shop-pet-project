const restaurantsService = require("../services/restaurants-service");

class RestaurantsController{
    async addRestaurants(req,res,next){
        try{
            const restaurants = req.body
            const createdRestaurants = restaurantsService.addRestaurants(restaurants)

            return res.json({title:"Reastaurants created", createdRestaurants})
        }catch(err){
            console.log(err);
            return res.status(500).json("Error add restaurants" + err);
        }
    }
    async getRestaurantss(req,res,next){
        try{
            const Restaurantss = await restaurantsService.getRestaurantss()

            return res.json(Restaurantss)
        }catch(err){
            console.log(err);
            return res.status(500).json("Error get restaurants" + err);
        }
    }
}

module.exports = new RestaurantsController()