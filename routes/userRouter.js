


const express = require('express')
const app = express()
const userController = require("../controller/userController")
const chatbotController = require("../controller/chatbotController")
const passport = require('passport')
const passportConfig = require("../config/passportConfig");

const { sequelize } = require('../models')




app.use(passport.initialize());
app.use(passport.session());

passportConfig.initializingPassport(passport, sequelize);



const userRouter = require('express').Router()


userRouter.post('/', userController.addUser)

userRouter.get('/', userController.getAllUsers)

userRouter.post('/login', passport.authenticate("local"), userController.loginUser);




userRouter.post('/:userId/chatbots', chatbotController.addChatbot)
userRouter.get('/:userId/chatbots',chatbotController.getUserChatbots)

userRouter.get('/:id', userController.getOneUser)

userRouter.put('/:id', userController.updateUser)

userRouter.delete('/:id', userController.deleteUser)






module.exports = userRouter