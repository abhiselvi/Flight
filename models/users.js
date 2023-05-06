const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true,'Please enter UserName'],
    unique: true,
  },
  email: {
    type: String,
    required: [true,'Please enter your email'],
    unique: true,
    lowercase:true,
    validate:[validator.isEmail, 'Please provide  valid email']
  },
  newpassword: {
    type: String,
    required: [true,'Please enter password'],
  },
  conformpassword: {
    type: String,
    required: [true,'Please enter password'],
    validate:{
        validator:function(el){
            return el==this.newpassword
        },
        message:'passwords are not same!'
    }
  },
  contact: {
    type: Number,
    required: true,
    unique: true
  },
  isadmin:{
    type:Boolean,
    default:false,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;