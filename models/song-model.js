const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Genre = require('./genre-model')
const Playlist = require('./playlist-model')
const Artist = require('./artist-model')

//////////
// YOUR CODE HERE:
//////////

var Song = sequelizeConnection.define('song',{
	// title: {
	// 	type: Sequelize.STRING,
		
	// 		validate: { min: 1, max: 250 
	// 		}
	// },

	// youtube_url:{
	// 	type: Sequelize.STRING,
	// 	// ,
	// 		validate: {isUrl: true 
	// 		}
	// }
	title: Sequelize.STRING(100)
		
		

})
// puts an artist id on songs/////////
Song.belongsTo(Artist)


Song.belongsToMany(Genre, { through: 'songGenre'});
Genre.belongsToMany(Song, { through: 'songGenre'});

Song.sync()

module.exports = Song;
