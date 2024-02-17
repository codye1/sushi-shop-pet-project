const userModel = require('../models/user-model');
const UserModal = require('../models/user-model');
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

            res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly:true})
            if (userData) {
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

            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly:true})

            console.log("refresh 1",userData);
            return res.json(userData)
        }catch (e){
            return res.json({error:"Error"})
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
}

module.exports = new UserController()