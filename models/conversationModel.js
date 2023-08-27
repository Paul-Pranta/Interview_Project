




module.exports = (sequelize, DataTypes) => { 


    const Conversation = sequelize.define("conversation", {

        durationInHour: {
            type:DataTypes.INTEGER
        },
        context: {
            type:DataTypes.TEXT
        } 
    });

    return Conversation




}