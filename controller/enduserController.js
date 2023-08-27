







const db = require("../models")

const Enduser = db.endusers

// add enduser
const addEnduser = async (req, res) => { 

    let info = {

        email: req.body.email,
        password: req.body.password
    }
    const enduser = await Enduser.create(info)
    
    res.status(200).send(enduser)
}

// get all enduser

const getAllEnduser = async (req, res) => { 
     
    try {
        const endusers = await Enduser.findAll({});
        res.status(200).json(endusers);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};


//get single enduser

const getOneEnduser = async (req, res) => {
    
    let id = req.params.endUserId
    let enduser = await Enduser.findOne({ where: { id: id } })
    res.status(200).send(enduser)

}

//update enduser

const updateEnduser = async (req, res) => { 
    let id = req.params.endUserId

    const enduser = await Enduser.update(req.body, { where: { id: id } });

    res.status(200).send(enduser);

}

//delete endUser

const deleteEnduser = async (req, res) => { 
    let id = req.params.endUserId

    await Enduser.destroy({ where: { id: id } });
    
    res.status(200).send("Enduser is deleted");

}







module.exports = {

    addEnduser,
    getAllEnduser,
    getOneEnduser,
    updateEnduser,
    deleteEnduser,
}
