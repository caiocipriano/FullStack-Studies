const userController = require('./controllers/UserController')

module.exports = [
    {
        endpoint:'/user',
        method:'GET',
        handler:userController.listUsers
    }
]