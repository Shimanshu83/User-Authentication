const User = require('../models/userModel');
const {genPassword} = require('../util/passwordUtils');
const jwt = require('jsonwebtoken');



const signup = async (req, res) => {
    const {name, email,  password } = req.body;   

    try {
        const alreadyExist = await User.findOne({email: email})
        
        if(alreadyExist){

            return res.status(401).send({error : 'email already exists'});
        }
        else{
            const passwordHash = genPassword(password);
            var user =  new User(
                {   
                    name : name , 
                    email : email,
                    password : passwordHash
                }
            )

            try {
        
                user = await user.save() ;
                const payload = {
                    id : user._id 
                }
                
                try {
                    const token = jwt.sign(payload , process.env.ACCESS_TOKEN_SECRET , {expiresIn : '2d'});
                    return res.status(200).json({result : {success : true , result : {name : user.name , email : user.email }} , token : token});
                    
                } catch (error) {

                    console.log(error);
                    return res.status(500).json({error : "Internal Server Error"}) ; 

                }
            
                
            } catch (error) {

                console.log(error);
                return res.status(500).json({error : "Internal Server Error"}) ; 

            }

            
        }
    } catch (error) {

        console.log(error);
        return res.status(500).json({error : "Internal Server Error"}) ; 

    }   
}
module.exports = signup ; 