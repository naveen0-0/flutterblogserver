const router = require('express').Router();
const User = require('../models/User');
const { key } = require('../config');
const jwt = require('jsonwebtoken');
const { checkToken } = require('../middleware')

//* Getting a individual user
router.route('/:username').get(checkToken,(req,res) => {
    User.findOne({ username : req.params.username }, (err,result) => {
        if(err) res.status(500).json({ msg : err})
        res.json({
            data : result,
            username : req.params.username
        })
    })
})

//* Login
router.route('/login').post((req,res) => {
    User.findOne({ username : req.body.username }, (err,result) => {
        if(err) return res.status(500).json({ msg : err });
        if(result == null){
            return res.status(403).json("Username incorrect")
        }
        if(result.password === req.body.password){
            let token = jwt.sign({ username:req.body.username},key, { expiresIn : "24" })
            res.json({
                token : token,
                msg : "success"
            })
        }else{
            res.status(403).json("password is incorrect")
        }
    })
})

//* Registering a user
router.route('/register').post((req,res) => {
    console.log("Register");
    const user = new User({
        username : req.body.username,
        password : req.body.password,
        email : req.body.email,
    });

    user.save()
    .then(() => {
        console.log("User Registered");
        res.status(200).json('ok')
    })
    .catch((err)=>{
        res.status(403).json({msg : err})
    })
})

//* Updating Password
router.route('/update/:username').patch(checkToken,(req,res) => {
    User.findOneAndUpdate(
        { username: req.params.username },
        { $set : { password : req.body.password }},
        (err,result) => {
            if(err) return res.status(500).json({ msg : err })
            const msg = {
                msg : "Password successfully updated",
                username : req.params.username
            };
            return res.json(msg)
        }
    )
})

//* Deleting user
router.route("/delete/:username").delete(checkToken,(req,res) => {
    User.findOneAndDelete({ username : req.params. username }, (err,result) => {
        if(err) return res.status(500).json({ msg : err });
        const msg = {
            msg : "Username deleted",
            username : username
        };
        return res.json(msg)
    })
})


module.exports = router;