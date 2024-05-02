const ActionModel = require("../models/action-model")

class ActionService{

    async addAction(action){
        const createdAction = await ActionModel.create(action)
    }
    async getActions(){
        const actions = await ActionModel.find()

        return actions
    }
}

module.exports = new ActionService()