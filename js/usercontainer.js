import React from 'react'
import {connect} from 'react-redux'
import User from './User'
import store from './store'

var usercontainer =store=>({
	username:store.username,
	password:store.password

})


export default connect(usercontainer)(User)