const { Schema,model } = require('mongoose');

const profileSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:String,
    profession:String,
    dob:String,
    title:String,
    about:String,
},{
    timestamps:true
})

const Profile = model('profile',profileSchema);
module.exports = Profile;