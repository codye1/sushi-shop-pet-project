const {Schema,model} = require("mongoose")

const UserSchema = new Schema({
    number:{type: String,unique:true,requiered:true,},
    smsCode:{code:{type:Number},expirationTime:{type:String}}

})

module.exports = model('User',UserSchema)