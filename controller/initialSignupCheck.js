const {emailValidator , passwordValidator} = require('../util/validate');

const initialSignupCheck = (req , res , next ) => {
    
    const {name, email, role, password, confirmPassword} = req.body ; 
    if (
        !(
        
        typeof name === 'string' &&
        typeof email === 'string' && 
        typeof password === 'string' && 
        typeof confirmPassword === 'string') 
    ){
        
       return  res.status(400).send({error : 'All fields are mendatory '});
    }
    else if (!(password === confirmPassword)){
        return  res.status(400).send({error : 'password and confirmPassword must match'})
    }
    else if (!emailValidator(email)){
       return res.status(400).send({error : 'please enter the valid emai'})
    }
    else if(!passwordValidator(password)){
        
        return res.status(400).send({error : 'password must be minimum eigth character, at least one letter and one number'});
        
    }
    
    next() ; 

}

module.exports = initialSignupCheck ; 