const jwt = require('jsonwebtoken');
const { key } = require('./config');

const checkToken = (req,res,next) => {
    let token = req.headers['authorization'].slice(7,);
    if(token){
        jwt.verify(token,key,(err,decoded) => {
            if(err){
                return res.json({
                    status:false,
                    msg:"Token is invalid"
                })
            }else{
                req.decoded = decoded
                next();
            }
        })
    }else{
        return res.json({
            status:false,
            msg:"Token is not provided"
        })
    }
}

module.exports = {
    checkToken
}