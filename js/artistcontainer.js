import {connect} from 'react-redux'
import App from './app'
import store from './store'
import Artist from './artist'


var artistContainer=store=>({
	
})


export default connect(artistContainer)(Artist)