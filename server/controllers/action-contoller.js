const actionService = require("../services/action-service");

class ActionController{
    async addAction(req,res,next){
        try{
            const action = req.body
            const createdAction = actionService.addAction(action)

            return res.json({title:"Акцію створено", createdAction})
        }catch(err){
            console.log(err);
        }
    }
    async getActions(req,res,next){
        try{
            const actions = await actionService.getActions()

            return res.json(actions)
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = new ActionController()