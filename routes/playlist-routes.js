var express = require('express')
var app = express()
var playlistRoutes = express.Router()
// var Artist = require('../models/artist-model')
var Playlist = require('../models/playlist-model')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// var store = require('../js/store')
// var playlistRoutes = ex[]


const getAllPlaylists = (req,res) =>{
	Playlist.findAll({ order:"name DESC"})
		.then(function(data){
		res.send(data)
	})
	// res.send('SHOWING playlistS')
}
		


// const getPlaylistById = (req,res) =>{
// 	Playlist.findById(req.params.id).then(function(data){
// 	res.send(data)
		
// 	})

// }

const createPlaylist = (req,res) =>{
	console.log(req.body)
	Playlist.create(
	
		 req.body
	
	).then(data=>{

	res.send(req.body.tempPlaylistName)
	})

}

// const deletePlaylistById = (req,res) =>{
// 	Playlist.destroy({
// 		where:{
// 			id:req.params.id
// 		} 
// 	})
// 	res.send('DELETED')
// }



// const upDatePlaylistTitle = (req,res) =>{
		
// 	Playlist.update({
// 	  name: req.params.newName,
// 	}, {
// 	  where: {
	   
// 	    name:req.params.oldName
// 	  }
// 	});
// 	res.send('UPDATED')
// }



playlistRoutes.route('/')
	.get(getAllPlaylists)
// playlistRoutes.route('/:id')
// 	.get(getPlaylistById)
// 	.delete(deletePlaylistById)
playlistRoutes.route('/')
	.post(createPlaylist)
// playlistRoutes.route('/:newName/:oldName')
// 	.put(upDatePlaylistTitle)



module.exports = playlistRoutes