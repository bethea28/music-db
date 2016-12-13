var Sequelize = require('sequelize')
var user = require('../models/user-model')
var express = require('express')
var userRoutes = express.Router()
var app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const session = require('express-session')




const authUser=(req,res)=>{
		
	  if(req.session.username) {
	    res.send(req.session.username);
	  } else {
	    res.send(null);
	  }
}
// app.get('/auth', (req, res) => {
// });
// Login route:
// will recieve usernaem and password through post request
// check if user exisits
// if user exists check if password is correct
// else if user does not exist create new user
// if they have correct password, or if new user give them access
// if not then we will tell them they have incorrect password || not authorized

// User.findOrCreate({username: "johny",password: "pass",email: "johny93[###]example.com"})
// .success(function(user, created){
//     console.log(user.values);
//     res.send(200);
// })
// .error(function(err){
//    console.log('Error occured' + err);
// })

const makeUser= (req, res) => {
  console.log('Session:', req.session);
  let userInfo = req.body;
  user.sync()
  //check if user exists
  .then(() => {
    return user.findOne({
      where: {
        username: userInfo.username
      }
    })
  })
  .then((user) => {
    //IF user exists, check if password is correct
    if(user && user.password === userInfo.password) {
      console.log('Password is correct!')
      return user;
    //ELSE IF user does not exist, create new user
    } else if(!user) {
      console.log('Creating new user!');
      return user.create(userInfo);
    } else {
      return null;
    }
  })
  .then((user) => {
    if(user) {
      req.session.username = user.username;
      req.session.save();
      console.log('Updated session?', req.session);
      res.send(user);
    } else {
      res.send('Incorrect password!');
    }
  })
  
}


 



userRoutes.route('/auth')
	.get(authUser)
userRoutes.route('/login')
	.post(makeUser)



module.exports=userRoutes