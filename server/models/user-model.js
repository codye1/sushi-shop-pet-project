const {Schema,model} = require("mongoose")

const UserSchema = new Schema({
    number:{type: String,unique:true,requiered:true,},
    smsCode:{
        code:{type:Number},
        expirationTime:{type: String}
    },
    deliveryAddresses:[{
        street: {type: String},
        house:{type: String},
        intercom:{type: String},
        apartment:{type: String},
        entrance:{type: String},
        floor:{type: String},
        name:{type: String}
    }]

})

module.exports = model('User',UserSchema)