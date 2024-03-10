const UserDto = require('../dtos/user-dto')
const userModel = require('../models/user-model')
const UserModel = require('../models/user-model')
const tokenService = require('./token-service')

class UserService{

    async sendSMSCode(number){
        const candidate = await UserModel.findOne({number})

        const code = Math.floor(1000 + Math.random() * (9999 + 1 - 1000))
        const expirationTime = Date.now() + 3 * 60 * 1000

        if (candidate) {
            candidate.smsCode.code = code
            candidate.smsCode.expirationTime = expirationTime
            candidate.save()
        }else{
            const user = await UserModel.create({number,smsCode:{code,expirationTime}})
            console.log(await UserModel.findOne({number}));
        }
        console.log("Send sms to user: "+number+" parol: "+code,"  ");
    }

    async login(number,code) {
        console.log(number);
        const candidate = await UserModel.findOne({number})

        console.log("Login to user: "+number+" parol: "+code);

        console.log("candidate"+candidate);
        console.log("date"+Date.now()<=candidate.smsCode.expirationTime);
        console.log("sms.code-code"+candidate.smsCode.code == code);

        if (candidate && Date.now()<=candidate.smsCode.expirationTime && candidate.smsCode.code == code) {
            const userDto = new UserDto(candidate)
            const token = await tokenService.deleteByUserId(userDto.id)
            const tokens = tokenService.generateTokens({...userDto})
            await tokenService.saveToken(userDto.id,tokens.refreshToken)

            return {
                ...tokens,
                user:userDto
            }
        }else{
            console.log("Что то пошло не так");
            return false
        }
    }
    async refreshSMSCode(number) {
        const candidate = await UserModel.findOne({number})
        tokenService.deleteByUserId(candidate.id)
        const code = Math.floor(1000 + Math.random() * (9999 + 1 - 1000))
        const expirationTime = Date.now() + 3 * 60 * 1000
        console.log("Refresh SMS Code to user: "+number+" parol: "+code);
        if (candidate) {
            candidate.smsCode.code = code
            candidate.smsCode.expirationTime = expirationTime
            candidate.save()
        }else{
            console.log("что то пошло не так");
        }
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken)
        console.log("Logout");
        return token
    }

    async refresh(refreshToken){
        if (!refreshToken) {
            throw new Error("refreshToken undefine")
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDB= await tokenService.findToken(refreshToken)
        await tokenService.removeToken(refreshToken)
        if(!userData || !tokenFromDB){
            throw new Error("In refresh !userData || !tokenFromDB undefine")
        }
        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user)

            const tokens = tokenService.generateTokens({...userDto})
            await tokenService.saveToken(userDto.id,tokens.refreshToken)

            return {
                ...tokens,
                user:userDto
            }
    }

    async getAllUsers(){
        const users = await userModel.find()
        console.log("Get all users");
        return users
    }

    async addAddress(number,address){
        const user = await userModel.findOne({number})
        user.deliveryAddresses.push(address)
        user.save()
        return user.deliveryAddresses
    }

    async deleteAddress(number,address){
        const user = await userModel.findOne({number})
        user.deliveryAddresses.remove(address)
        user.save()
        return user.deliveryAddresses
    }

    async putAddress(number,address){
        const user = await userModel.findOne({number})
        const indexOldAddress = user.deliveryAddresses.findIndex(obj => obj._id == address._id)
        user.deliveryAddresses[indexOldAddress] = address
        user.save()
        return user.deliveryAddresses
    }

    async saveBirthDate(number,birthDate){
        const user = await userModel.findOne({number})
        if (user.birthDate.length == 0) {
            console.log(birthDate);
            user.birthDate=birthDate
            user.save()
        }else{
            console.log("Уже є дата");
        }
    }

    async saveName(number,name){
        const user = await userModel.findOne({number})
        user.name=name
        user.save()
    }

    async saveEmail(number,email){
        const user = await userModel.findOne({number})
        user.email = email
        user.save()

    }

}


module.exports = new UserService()