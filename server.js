const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');
const artistRoutes = require('./routes/artist-routes')
const songRoutes = require('./routes/song-routes')
const playlistRoutes = require('./routes/playlist-routes')
const genreRoutes = require('./routes/genre-routes')
const userRoutes = require('./routes/user-routes')
const session = require('express-session')

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
var staticPath = path.join(__dirname,'./client/public')
app.use(express.static(staticPath))
app.use(bodyParser.urlencoded({ extended: true }));

// Login route:
// will recieve usernaem and password through post request
// check if user exisits
// if user exists check if password is correct
// else if user does not exist create new user
// if they have correct password, or if new user give them access
// if not then we will tell them they have incorrect password || not authorized

app.use(session({
  secret: 'let me tell you what i learned with my bachelors',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use('/api/artist',artistRoutes)
app.use('/api/song',songRoutes)
app.use('/api/playlist',playlistRoutes)
app.use('/api/genre',genreRoutes)
app.use('/api/user',userRoutes)
app.use('/*', (req,res)=>{res.sendFile(__dirname +'/client/public/index.html')})



//listen on port 8888
app.listen(3000, () => console.log('Listening on port 3000'));


//////////
//////
// YOUR CODE HERE:
////