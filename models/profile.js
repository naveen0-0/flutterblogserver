const { Schema,model } = require('mongoose');

const profileSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String
    },
    profession:{
        type:String
    },
    dob:{
        type:String
    },
    title:{
        type:String
    },
    about:{
        type:String
    },
},{
    timestamps:true
})

const Profile = model('profile',profileSchema);
module.exports = Profile;