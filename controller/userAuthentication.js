const jwt = require('jsonwebtoken');

const User = require('../models/userModel')
const {emailValidator}  = require('../util/validate')
const {validPassword} = require('../util/passwordUtils')

const userAuthentication = async (req , res , next ) => {
    const { email , password }  = req.body ;
    
    if(!(typeof email === 'string' && typeof password === 'string')){
        return res.status(400).json({error : "All fields are mendatory"})
    }
    else if(!emailValidator(email)){
        return res.status(400).json({error : "enter valid email"});
    }
    try {

        var user = await User.findOne({email : email });
        if(!user){
            return res.status(401).json({error : "email does not exist"});
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({error : "Internal Server Error"}) ; 
    }


   

    const isValid = validPassword(password , user.password) ; 

    if(!(isValid)){
        return res.status(401).json({error : "wrong password"})
    }

    const payload = {
        id : user._id
    }
    
    try {
        const token = jwt.sign(payload , process.env.ACCESS_TOKEN_SECRET , {expiresIn : '2d'});

        return res.status(200).json({sucess : true , result : {name : user.name , email : user.email , role : user.role} , token : token});
        
    } catch (error) {

        console.log(error);
        return res.status(500).json({error : "Internal Server Error"}) ; 
    }

    
}

module.exports = userAuthentication ;