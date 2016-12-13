var Sequelize = require('sequelize')
var sequelizeConnection = require('../db')


var User = sequelizeConnection.define('user',{
	username: Sequelize.STRING(200),
	password: Sequelize.STRING(200)
})




User.sync()

module.exports = User