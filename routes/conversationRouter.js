


const chatbotController = require("../controller/chatbotController")
const conversationController = require("../controller/conversationController");


const conversationRouter = require('express').Router()


conversationRouter.get('/:conversationId', conversationController.getOneConversation)

conversationRouter.put('/:conversationId', conversationController.updateConversation)

conversationRouter.delete('/:conversationId', conversationController.deleteConversation)



module.exports = conversationRouter;