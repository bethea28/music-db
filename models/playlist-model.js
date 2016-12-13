const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//////////
// YOUR CODE HERE:
//////////


var Playlist = sequelizeConnection.define('playlist',{

	name: Sequelize.STRING(100)
		
		

})
Playlist.sync()


module.exports = Playlist;
