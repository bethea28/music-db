import {connect} from 'react-redux'
import App from './app'
import store from './store'
import Playlist from './playlist'


var playlistContainer=store=>({
	
})


export default connect(playlistContainer)(Playlist)