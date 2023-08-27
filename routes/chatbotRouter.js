

const userController = require("../controller/userController")
const chatbotController = require("../controller/chatbotController")
const conversationController = require("../controller/conversationController");


const chatbotRouter = require('express').Router()



chatbotRouter.post("/:chatbotId/conversations", conversationController.addConversation);
chatbotRouter.get("/:chatbotId/conversations", conversationController.getChatbotConversation)

chatbotRouter.get('/:chatbotId', chatbotController.getOneChatbot)

chatbotRouter.put('/:chatbotId', chatbotController.updateChatbot)

chatbotRouter.delete('/:chatbotId', chatbotController.deleteChatbot)

//  *****as bonus part i have included search chatbot feature****

chatbotRouter.get("/search/:chatbotName", chatbotController.getChatbotByName)



module.exports = chatbotRouter;