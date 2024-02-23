module.exports = class UserDto {
    number;
    id;
    deliveryAddresses

    constructor(model){
         this.number=model.number
         this.id=model._id
         this.deliveryAddresses=model.deliveryAddresses
    }
}