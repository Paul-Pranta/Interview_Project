

const express = require('express')
const cors = require('cors')
const app = express()


// the core setup is to connect with frontend part

const corOptions = {

    origin:"https://localhost:8081"
}




//middleware



app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const expressSession = require("express-session");
app.use(expressSession({secret:"secret",resave:false,saveUninitialized:false}));




//routing

const userRouter = require('./routes/userRouter');
app.use('/users', userRouter);


const chatbotRouter = require('./routes/chatbotRouter');
app.use('/chatbots', chatbotRouter);


const conversationRouter = require('./routes/conversationRouter')
app.use('/conversations', conversationRouter)

const enduserRouter = require('./routes/enduserRouter');
app.use('/endusers',enduserRouter)


//initial api testing

app.get("/", (req, res) => { 

    res.json({messege:"hello world"})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => { 
    console.log(`server is running on port no ${PORT}`);
})
