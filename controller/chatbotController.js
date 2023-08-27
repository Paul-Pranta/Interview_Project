



const db = require("../models")

const Chatbot = db.chatbots

// add Chatbot
const addChatbot = async (req, res) => { 

    let user_id = req.params.userId

    let data = {

        capacity: req.body.capacity,
        botname: req.body.botname,
        user_id: user_id,
    }
    const chatbot = await Chatbot.create(data)
    
    res.status(200).send(chatbot)
}

// get all chatbots for a user

const getUserChatbots = async (req, res) => { 
    const userId = req.params.userId; 
    
    try {
        const data = await Chatbot.findAll({
            where: {
                user_id: userId 
            }
        });

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};


//get single chatbot

const getOneChatbot = async (req, res) => {
    
    let id = req.params.chatbotId
    let chatbot = await Chatbot.findOne({ where: { id: id } })
    res.status(200).send(chatbot)

}

//update chatbot

const updateChatbot = async (req, res) => { 
    let id = req.params.chatbotId

    const chatbot = await Chatbot.update(req.body, { where: { id: id } });

    res.status(200).send(chatbot);

}

//delete chatbot

const deleteChatbot = async (req, res) => { 
    let id = req.params.chatbotId

    await Chatbot.destroy({ where: { id: id } });
    
    res.status(200).send("chatbot is deleted")

}

// **** as a bonus part i have implemented search for chatbot


const getChatbotByName = async (req, res) => {
    
    try {

        let chatbotName = req.params.chatbotName
        let chatbot = await Chatbot.findOne({ where: { botname:chatbotName  } })
        res.status(200).send(chatbot)

    } catch (err) { 

        res.status(404).send("failed to find required chatbot")
    }

}








module.exports = {

    addChatbot,
    getUserChatbots,
    getOneChatbot,
    updateChatbot,
    deleteChatbot,
    getChatbotByName,

}
