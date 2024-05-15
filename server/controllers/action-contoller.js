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
            const {title}= req.query

            if(title){
                const filteredProd = products.filter(item=>item.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
                return res.json(filteredProd)
            }

            return res.json(actions)
        }catch(err){
            console.log(err);
        }
    }

    async getActionsById(req,res,next){
        try{
            const actions = await actionService.getActions()
            const {id} = req.params

            const filteredAction = actions.filter(item=>item.id.toLocaleLowerCase().includes(id.toLocaleLowerCase()))
            console.log(id);
            console.log(actions);
            return res.json(filteredAction[0])

        }catch(err){
            console.log(err);
        }
    }
}

module.exports = new ActionController()