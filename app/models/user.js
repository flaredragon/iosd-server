// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var moment = require('moment');

// define the schema for our user model
var userSchema = mongoose.Schema({
    username : String ,
    email : String,
    password : String,
    twitter: String,
    facebook: String,
    linkedin: String,
    name: String ,
    college: String,
    phone: Number,
    picture: String ,
    isAdmin:Boolean,
    name:String , 
    joinDate : { type:String , default :moment().format('DD-MM-YYYY') }

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
