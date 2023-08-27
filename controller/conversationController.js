





const db = require("../models")

const Conversation = db.conversations

// add conversation
const addConversation = async (req, res) => { 

    let chatbot_id = req.params.chatbotId

    let data = {

        durationInHour: req.body.durationInHour,
        context: req.body.context,
        chatbot_id: chatbot_id,
    }
    const conversation = await Conversation.create(data)
    
    res.status(200).send(conversation)
}

// get all conversation of Chatbot

const getChatbotConversation = async (req, res) => { 
    const chatbot_id = req.params.chatbotId; 
    
    try {
        const data = await Conversation.findAll({
            where: {
                chatbot_id: chatbot_id 
            }
        });

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};


//get single conversation

const getOneConversation = async (req, res) => {
    
    let id = req.params.conversationId
    let conversation = await Conversation.findOne({ where: { id: id } })
    res.status(200).send(conversation)

}

//update conversation

const updateConversation = async (req, res) => { 
    let id = req.params.conversationId

    const conversation = await Conversation.update(req.body, { where: { id: id } });

    res.status(200).send(conversation);

}

//delete conversation

const deleteConversation = async (req, res) => { 
    let id = req.params.conversationId

    await Conversation.destroy({ where: { id: id } });
    
    res.status(200).send("conversation is deleted")

}







module.exports = {

    addConversation,
    getChatbotConversation,
    getOneConversation,
    updateConversation,
    deleteConversation,
}
