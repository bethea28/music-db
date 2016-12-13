var express = require('express')
var app = express()
var genreRoutes = express.Router()
var Genre = require('../models/genre-model')
var Song = require('../models/song-model')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


const getAllGenre = (req,res) =>{
	Genre.findAll({ }).then(function(data){
		res.send(data)
	})
}


// const getGenreById = (req,res) =>{
// 	Genre.findById(req.params.id).then(function(data){
// 	res.send(data)
		
// 	})

// }
const createGenre = (req,res) =>{
	Genre.create({
		title: req.params.name
	}).then(function(data){

	res.send('CREATED genre')
	})
}

// const deleteGenreById = (req,res) =>{
// 	Genre.destroy({
// 		where:{
// 			id:req.params.id
// 		} 
// 	})
// 	res.send('DELETED')
// }



// const upDateGenreName = (req,res) =>{
		
// 	Genre.update({
// 	  title: req.params.newName,
// 	}, {
// 	  where: {
	   
// 	    title:req.params.oldName
// 	  }
// 	});
// 	res.send('UPDATED')
// }



genreRoutes.route('/')
	.get(getAllGenre)
// genreRoutes.route('/:id')
// 	.get(getGenreById)
// 	.delete(deleteGenreById)
genreRoutes.route('/:name')
	.post(createGenre)
// genreRoutes.route('/update/:newName/:oldName')
// 	.put(upDateGenreName)



module.exports = genreRoutes