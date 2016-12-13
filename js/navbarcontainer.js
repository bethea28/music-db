import {connect} from 'react-redux'
import App from './app'
import store from './store'
import Navbar from './navbar'


var navbarContainer=store=>({
	
})


export default connect(navbarContainer)(Navbar)