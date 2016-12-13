import React from 'react'
import tempPassword from './actions'


var User=React.createClass({
	makeUser(event){
		event.preventDefault()
		let info = {username:store.getState().username,password:store.getState().password}
		console.log(info)
		$.ajax({
			url:'/api/user',
			type:"POST",
			data:info,
			success:function(data){
				console.log(data)
			}.bind(this)
		})
	},
	
	handleChange(event){
		var text = event.target.value
		store.dispatch(tempPassword(text))
		console.log(store.getState().tempPassword)
	},
	
	render(){
		return (
			<div>
				<form onSumbit={this.makeUser}>
					<input onChange={this.handleChange} type='text'/>
					<input type='submit'/>
				</form>
			</div>
		)
	}
})

export default User