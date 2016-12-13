import React from 'react'
import $ from 'jquery'
import {createStore} from 'redux'
import {allSongs} from './actions'
import store from './store'


const Song = React.createClass({
		
		componentDidMount(){
			$.ajax({
				url:"/api/song",
				type:'GET'
			})
			.done((data)=>{
				var parse = data[0].title
				console.log(parse)
				store.dispatch(allSongs(parse))		
				console.log(store.getState().songs)

			})
		},

		

				
		render(){
			return(
				<div>

					{store.getState().songs}
				</div>
			)
		}
})

export default Song