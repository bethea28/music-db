import React from 'react'
import $ from 'jquery'
import Song from './song'
import {allArtist} from './actions'
import store from './store'


const Artist = React.createClass({

	componentDidMount(){
		$.ajax({
			url:'/api/artist',
			type: 'GET',
		})
		.done(function(data){
			var parse =data[0]
			console.log(parse.name)
			store.dispatch(allArtist(parse.name))
			console.log(store.getState().artist)
		})

	},

	render(){
		return(
			<div>

    			
				{store.getState().artist}
				{this.props.children}
			</div>
		)
	}
})

export default Artist