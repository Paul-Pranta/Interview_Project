





module.exports = (sequelize, DataTypes) => { 


    const Enduser = sequelize.define("enduser", {

        email: {
            type: DataTypes.STRING,
            allowNull:false
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false  
        }

    });

    return Enduser




}