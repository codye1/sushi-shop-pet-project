const UserDto = require('../dtos/user-dto');
const tokenService = require('../services/token-service');
const userService = require('../services/user-service');

class UserController {
    async sendSMSCode(req,res,next) {
        try{
            const {number} = req.body
            const userData = await userService.sendSMSCode(number)
            return res.json("Смс отправилось")

        }catch (e){
            console.log(e);
        }
    }

    async refreshSMSToken(req,res,next){
        try{
            const {number} = req.body
            console.log(req.body);
            const userData = await userService.refreshSMSCode(number)
            return res.json("Сработало")
        }catch(e){
            console.log(e);
        }
    }

    async login(req,res,next) {
        try{
            const {number,code} = req.body
            const userData = await userService.login(number,code)


            if (userData) {
                res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000, httpOnly:true, sameSite: 'None', secure: true ,});
                return res.json(userData)
            }else{
                return res.json("Error")
            }

        }catch (e){
            console.log(e);
        }
    }

    async logout(req,res,next){
        try{
            const {refreshToken} = req.cookies
            console.log(req.cookies);
            const token = await userService.logout(refreshToken)
            res.clearCookie("refreshToken")
            return res.json(token)
        }catch (e){
            console.log(e);
        }
    }

    async refresh(req,res,next){
        try{
            const {refreshToken} = req.cookies
            console.log(req.cookies);
            const userData = await userService.refresh(refreshToken)

            res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000, httpOnly:true, sameSite: 'None', secure: true });
            return res.json(userData)

        }catch (e){
            console.log("error");
            console.log(req.cookies);
            return res.json({error:"Error",error2:e})
        }
    }

    async getAllUsers(req,res,next) {
        try{
            console.log("users");
            const users = await userService.getAllUsers()
            return res.json(users)
        }catch (e){
            console.log(e);
        }
    }

    async addAddress(req,res,next) {
        try{
            const address = req.body
            const accesToken = req.headers.authorization.split(' ')[1]
            const userData = tokenService.validateAccessToken(accesToken)
            const newAddresses= await userService.addAddress(userData.number,address)
            return res.json(newAddresses)
        }catch (e){
            console.log(e);
        }
    }

    async deleteAddress(req,res,next) {
        try{
            const address = req.body
            const accesToken = req.headers.authorization.split(' ')[1]
            const userData = tokenService.validateAccessToken(accesToken)
            console.log(userData);
            const newAddresses= await userService.deleteAddress(userData.number,address)
            return res.json(newAddresses)
        }catch (e){
            console.log(e);
        }
    }

    async putAddress(req,res,next) {
        try{
            const address = req.body
            const accesToken = req.headers.authorization.split(' ')[1]
            const userData = tokenService.validateAccessToken(accesToken)

            const newAddresses = await  userService.putAddress(userData.number,address)
            console.log("321231",newAddresses);
            return res.json(newAddresses)
        }catch (e){
            console.log(e);
        }
    }

    async saveBirthDate(req,res,next) {
        try{
            const result = req.body
            const accesToken = req.headers.authorization.split(' ')[1]
            const userData = tokenService.validateAccessToken(accesToken)
            userService.saveBirthDate(userData.number,result.birthDate)
        }catch (e){
            console.log(e);
        }
    }

    async saveName(req,res,next) {
        try{
            const result = req.body
            const accesToken = req.headers.authorization.split(' ')[1]
            const userData = tokenService.validateAccessToken(accesToken)
            userService.saveName(userData.number,result.name)
        }catch (e){
            console.log(e);
        }
    }

    async saveEmail(req,res,next) {
        try{
            const result = req.body
            const accesToken = req.headers.authorization.split(' ')[1]
            const userData = tokenService.validateAccessToken(accesToken)
            console.log(result);
            userService.saveEmail(userData.number,result.email)
        }catch (e){
            console.log(e);
        }
    }

    async uploadImg(req,res,next) {
        try{
            const result = req.body
            const accesToken = req.headers.authorization.split(' ')[1]
            const userData = tokenService.validateAccessToken(accesToken)
            userService.saveImg(userData.number,result.img)
        }catch (e){
            console.log(e);
        }
    }

}

module.exports = new UserController()