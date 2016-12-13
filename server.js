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

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
var staticPath = path.join(__dirname,'./client/public')
app.use(express.static(staticPath))
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/artist',artistRoutes)
app.use('/api/song',songRoutes)
app.use('/api/playlist',playlistRoutes)
app.use('/api/genre',genreRoutes)
app.use('/*', (req,res)=>{res.sendFile(__dirname +'/client/public/index.html')})

//listen on port 8888
app.listen(3000, () => console.log('Listening on port 3000'));


//////////
//////
// YOUR CODE HERE:
////