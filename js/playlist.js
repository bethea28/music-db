import React from 'react'
import $ from 'jquery'
import Song from './song'

// import test from './actions'

const Playlist = React.createClass({

	componentDidMount(){
		

	},

	render(){
		return(
			<div>

    			<button>playlist</button>
				{this.props.children}
			</div>
		)
	}
})

export default Playlist