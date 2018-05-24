const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = require('bluebird');


const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(require('mongoose-unique-validator'));


//prevents sending hashed passwords in the response
userSchema.set('toJSON', {
  transform(doc, json) {
    delete json.password;
    return json;
  }
});

//this.password is the hashed password and password is the plain text password. compareSync takes an unhashed
//password and the stored hash password and checks if they will be the same.
userSchema.methods.validatePassword = function validatePassword(password){
  return bcrypt.compareSync(password, this.password);
};

//temporary stores the passwordConfimation field for it to be allowed to be accessed later on. _ Before
//the name means that it is a temporary field.
userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  });

//Before (pre) any function 'saves' something, run this function to encrypt the password before it is stored:
userSchema.pre('validate', function checkPassword(next){
  if(this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});


//Before (pre) the save we check to see if the password has changed and if it has we re-hash the password
//dont want to hash the password if it isn't changed as we would hash the hash of our password and it will
//cause errors.
userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
