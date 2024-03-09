module.exports = class UserDto {
    number;
    id;
    deliveryAddresses;
    name;
    birthDate;
    email;

    constructor(model){
         this.number=model.number
         this.id=model._id
         this.deliveryAddresses=model.deliveryAddresses
         this.name=model.name
         this.birthDate=model.birthDate
         this.email=model.email
    }
}