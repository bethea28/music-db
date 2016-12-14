import React from 'react'
import tempPassword from './actions'
import {handleUserName} from './actions'
import {handleUserPass} from './actions'
import store from './store'
import $ from 'jquery'


var User=React.createClass({
	makeUser(event){
		event.preventDefault()
		console.log(store.getState().username)
		console.log(store.getState().password)

		var info = {username:store.getState().username,password:store.getState().password}
		console.log(info)
		$.ajax({
			url:'/api/user/login',
			type:"POST",
			data:info,
			
		}).done(function(data){
			console.log(data)
		})
	},
	
	handleUserName(event){
		var text = event.target.value
		console.log(text)
		store.dispatch(handleUserName(text))
		// console.log(store.getState().tempPassword)
	},

	handleUserPass(event){
		var text = event.target.value
		console.log(text)
		store.dispatch(handleUserPass(text))
		// console.log(store.getState().password)
	},
	
	render(){
		return (
							// <input onChange={this.handleChangePass} type='text'/>
			<div>
				{store.getState().username}
				{store.getState().password}
				<form onSubmit={this.makeUser}>
						<div>
							USER NAME
							<input onChange={this.handleUserName} type='text'/>
						</div>

						<div>
							PASSWORD
							<input onChange={this.handleUserPass} type='text'/>

						</div>
					<input type='submit'/>
				</form>
			</div>
		)
	}
})

export default User