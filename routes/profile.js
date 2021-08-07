const router = require('express').Router();
const {checkToken} = require('../middleware');
const Profile = require('../models/profile');

router.route("/add").post(checkToken,(req,res)=>{
    const profile = Profile({
        username:req.decoded.username,
        name:req.body.name,
        profession:req.body.profession,
        dob:req.body.dob,
        title:req.body.title,
        about:req.body.about,
    });
    profile.save()
        .then(()=>{
            return res.json({msg:"Profile successfully stored"})
        })
        .catch((err)=>{
            return res.status(400).json({err:err})
        })
})



module.exports = router;