

const db = require("../models")

const User = db.users




//cretae user

const addUser = async (req, res) => { 

    let info = {

        username: req.body.username,
        password: req.body.password,
        contact: req.body.contact,
        address: req.body.address,
    }

    const user = await User.create(info)

    res.status(200).send(user)
    console.log(user);
}

//get all users

const getAllUsers = async (req, res) => { 
    let users = await User.findAll({})
    res.status(200).send(users)
}

//get single user

const getOneUser = async (req, res) => {
    
    let id = req.params.id
    let user = await User.findOne({ where: { id: id } })
    res.status(200).send(user)

}

//update user

const updateUser = async (req, res) => { 
    let id = req.params.id

    const user = await User.update(req.body, { where: { id: id } });

    res.status(200).send(user);

}

//delete user

const deleteUser = async (req, res) => { 
    let id = req.params.id

    await User.destroy({ where: { id: id } });
    
    res.status(200).send("user is deleted")

}

//for login authentication bonus part ****



const loginUser = async (req, res) => { 
    res.status(200).send(`Welcome ${req.body.username}`);
}






module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    loginUser
}



