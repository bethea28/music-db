const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//////////
// YOUR CODE HERE:
//////////


var Genre = sequelizeConnection.define('genre',{
	title:Sequelize.STRING
			
	
})

Genre.sync()



module.exports = Genre;
