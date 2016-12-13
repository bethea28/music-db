var express = require('express')
var app = express()
var songRoutes = express.Router()
var song = require('../models/song-model')
var Artist = require('../models/artist-model')
var Genre = require('../models/genre-model')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


const getAllSongs = (req,res) =>{
	song.findAll({	  })
		.then(function(data){
		res.send(data)
	})
	// res.send('SHOWING SONGS')
}
		


// const getSongById = (req,res) =>{
// 	song.findById(req.params.id).then(function(data){
// 	res.send(data)
		
// 	})

// }
const createSong = (req,res) =>{
	song.create({
		title: req.params.name
		
	})

	res.send('CREATED song')
}

// const deleteSongById = (req,res) =>{
// 	song.destroy({
// 		where:{
// 			id:req.params.id
// 		} 
// 	})
// 	res.send('DELETED')
// }



// const upDateSongTitle = (req,res) =>{
		
// 	song.update({
// 	  title: req.params.newName,
// 	}, {
// 	  where: {
	   
// 	    title:req.params.oldName
// 	  }
// 	});
// 	res.send('UPDATED')
// }



songRoutes.route('/')
	.get(getAllSongs)
// songRoutes.route('/:id')
// 	.get(getSongById)
// 	.delete(deleteSongById)
songRoutes.route('/:name')
	.post(createSong)
// songRoutes.route('/update/:newName/:oldName')
// 	.put(upDateSongTitle)



module.exports = songRoutes