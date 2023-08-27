


const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(

    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
}
)

sequelize.authenticate()
    .then(() => {
        console.log('connected...')
    })
    .catch(err => {
        console.log('Error' + err)
    })


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require("./userModel")(sequelize, DataTypes)

db.chatbots = require("./chatbotModel")(sequelize, DataTypes)

db.conversations = require("./conversationModel")(sequelize, DataTypes)

db.endusers = require("./enduserModel")(sequelize, DataTypes)



db.sequelize.sync({ force: false })
    .then(() => { 
        console.log("yes re-sync done!")
    })


//one to many relations


db.users.hasMany(db.chatbots, {
    foreignKey: 'user_id',
    as: 'chatbot'
})

db.chatbots.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: 'user'
})



db.chatbots.hasMany(db.conversations, {
    foreignKey: 'chatbot_id',
    as: 'conversation'
})

db.conversations.belongsTo(db.chatbots, {
    foreignKey: 'chatbot_id',
    as: 'chatbot'
})
module.exports = db