import {connect} from 'react-redux'
import App from './app'
import store from './store'
import Song from './song'


var songContainer=store=>({
	
})


export default connect(songContainer)(Song)