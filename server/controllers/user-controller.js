const UserDto = require('../dtos/user-dto');
const tokenService = require('../services/token-service');
const userService = require('../services/user-service');

class UserController {
    async sendSMSCode(req,res,next) {
        try{
            const {number} = req.body
            const code = await userService.sendSMSCode(number)
            return res.json(code)

        }catch (e){
            console.error('Send SMS code error:', e)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    async refreshSMSToken(req,res,next){
        try{
            const {number} = req.body
            console.log(req.body);
            const userData = await userService.refreshSMSCode(number)
            return res.json("Токен обновлен")
        }catch(e){
            console.error('Refresh SMS token error:', e)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    async login(req,res,next) {
        try{
            const {number,code} = req.body
            const userData = await userService.login(number,code)


            if (userData) {
                res.cookie('refreshToken', userData.refreshToken, {
                    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
                    httpOnly: true,
                    sameSite: 'None',
                    secure: true,
                    domain: "sushi-shop-pet-project-m7t7.vercel.app"
                });
                return res.json(userData)
            }else{
                return res.status(400).json("Неверный код или истекло время действия кода")
            }

        }catch (e){
            console.error('Login error:', e)
            return res.status(500).json({ message: 'Internal server error' })
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
            console.error('Logout error:', e)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    async refresh(req,res,next){
        try{
            const {refreshToken} = req.cookies
            const userData = await userService.refresh(refreshToken)
            // domain: "sushi-shop-pet-project-m7t7.vercel.app"
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
                httpOnly: true,
                sameSite: 'None',
                secure: true,
                domain: "sushi-shop-pet-project-m7t7.vercel.app"
            });
            return res.json(userData)

        }catch (e){
            console.error('Refresh error:', e)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    async getAllUsers(req,res,next) {
        try{
            console.log("Get users");
            const users = await userService.getAllUsers()
            return res.json(users)
        }catch (e){
            console.error('Get all users error:', e)
            return res.status(500).json({ message: 'Internal server error' })
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
            console.error('Add address error:', e)
            return res.status(500).json({ message: 'Internal server error' })
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
            console.error('Delete address error:', e)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    async putAddress(req,res,next) {
        try{
            const address = req.body
            const accesToken = req.headers.authorization.split(' ')[1]
            const userData = tokenService.validateAccessToken(accesToken)

            const newAddresses = await  userService.putAddress(userData.number,address)
            console.log("New addresses",newAddresses);
            return res.json(newAddresses)
        }catch (e){
            console.error('Put address error:', e)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    async saveBirthDate(req,res,next) {
        try{
            const result = req.body
            const accesToken = req.headers.authorization.split(' ')[1]
            const userData = tokenService.validateAccessToken(accesToken)
            userService.saveBirthDate(userData.number,result.birthDate)
        }catch (e){
            console.error('Save birth date error:', e)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    async saveName(req,res,next) {
        try{
            const result = req.body
            const accesToken = req.headers.authorization.split(' ')[1]
            const userData = tokenService.validateAccessToken(accesToken)
            userService.saveName(userData.number,result.name)
        }catch (e){
            console.error('Save name error:', e)
            return res.status(500).json({ message: 'Internal server error' })
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
            console.error('Save email error:', e)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    async uploadImg(req,res,next) {
        try{
            const result = req.body
            const accesToken = req.headers.authorization.split(' ')[1]
            const userData = tokenService.validateAccessToken(accesToken)
            userService.saveImg(userData.number,result.img)
        }catch (e){
            console.error('Upload img error:', e)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

}

module.exports = new UserController()
