


module.exports = (sequelize, DataTypes) => { 


    const Chatbot = sequelize.define("chatbot", {

        capacity: {
            type:DataTypes.INTEGER
        },
        botname: {
            type:DataTypes.TEXT
        } 
    });

    return Chatbot

}