const { Schema,model } = require("mongoose")

const TokenSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    refreshToken:{type: String,unique:true,requiered:true,}

})

module.exports = model('Token',TokenSchema)

