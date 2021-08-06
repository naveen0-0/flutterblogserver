const { Schema,model } = require('mongoose');

const profileSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:String,
    profession:String,
    DOB:String,
    titleline:String,
    about:String,
    img:{
        type:String,
        default:""
    }
},{
    timestamps:true
})

const Profile = model('profile',profileSchema);