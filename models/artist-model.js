const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//////////
// YOUR CODE HERE:
//////////

const Artist = sequelizeConnection.define('artist',{
	name:Sequelize.STRING


})



Artist.sync()

module.exports = Artist;
