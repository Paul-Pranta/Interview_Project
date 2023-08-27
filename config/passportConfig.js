 
const localStrategy = require('passport-local').Strategy;
const { DataTypes } = require("sequelize");


exports.initializingPassport = (passport, sequelize) => {
    const User = require("../models/userModel")(sequelize, DataTypes);

    passport.use(new localStrategy(async (username, password, done) => { 
        try {
            const user = await User.findOne({ where: { username: username } })
        
            if (!user) return done(null, false);

            if (user.password !== password) return done(null, false);

            return done(null, user);
        } catch (err) { 

            return done(err, false);

        }
    })
    
    )


    passport.serializeUser((user, done) => { 
        done(null, user.id)
    })

    passport.deserializeUser(async (id, done) => { 
        try {

            const user = await User.findOne({ where: { id: id } });
            done(null, user);
            
        } catch (err) {

            done(err, false);


         }
    })
    
} 