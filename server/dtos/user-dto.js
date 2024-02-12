module.exports = class UserDto {
    number;
    id;

    constructor(model){
         this.number=model.number
         this.id=model._id

    }
}