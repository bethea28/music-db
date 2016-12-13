import React from 'react'
import $ from 'jquery'
import Song from './song'
import {tempPlaylistName} from './actions'
import store from './store'
import {createStore} from 'redux'

// import test from './actions'

const Createplaylist = React.createClass({
	// print(data){
	// 	console.log(data)
	// },

	makePlaylist(event){
		event.preventDefault()
		var info = {name: store.getState().tempPlaylistName}
		console.log(info)
		$.ajax({
			url:'/api/playlist',
			type:"POST",
			data:info,
			success:function (data){
			// JSON.stringify(data)
			console.log(data)
			// this.print(data)

			}.bind(this)
		})	

	},

	handleChange(event){
		var text=event.target.value
		console.log(text)
		store.dispatch(tempPlaylistName(text))
	},

	render(){
		return(
			<div>
				{store.getState().tempPlaylistName}
    			<form onSubmit={this.makePlaylist}>
    				<input onChange={this.handleChange} type='text'/>
    				<input type='submit'/>
    			</form>

			</div>
		)
	}
})

export default Createplaylist