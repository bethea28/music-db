import {connect} from 'react-redux'
import App from './app'
import store from './store'
import CreatePlaylist from './createplaylist'
// import store from './store'


var createplaylistContainer=store=>({
	tempPlaylistName:store.tempPlaylistName,
	finalPlaylistName:store.finalPlaylistName
})


export default connect(createplaylistContainer)(CreatePlaylist)