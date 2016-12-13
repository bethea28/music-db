var express = require('express')
var app = express()
var artistRoutes = express.Router()
var Artist = require('../models/artist-model')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


const getAllArtist = (req,res) =>{
	Artist.findAll({}).then(function(data){
		order:"createdAt DESC"	
		res.send(data)
	})
}


// const getArtistById = (req,res) =>{
// 	Artist.findById(req.params.id).then(function(data){
// 	res.send(data)
		
// 	})

// }
const createArtist = (req,res) =>{
	Artist.create({
		name: req.params.name
	}).then(function(data){

	res.send('CREATED ARTIST')
	})
}

// const deleteArtistById = (req,res) =>{
// 	Artist.destroy({
// 		where:{
// 			id:req.params.id
// 		} 
// 	})
// 	res.send('DELETED')
// }



// const upDateSongName = (req,res) =>{
		
// 	Artist.update({
// 	  name: req.params.newName,
// 	}, {
// 	  where: {
	   
// 	    name:req.params.oldName
// 	  }
// 	});
// 	res.send('UPDATED')
// }



artistRoutes.route('/')
	.get(getAllArtist)
// artistRoutes.route('/id/:id')
// 	.get(getArtistById)
// 	.delete(deleteArtistById)
artistRoutes.route('/:name')
	.post(createArtist)
// artistRoutes.route('/update/:newName/:oldName')
// 	.put(upDateSongName)



module.exports = artistRoutes