import React from 'react'
import $ from 'jquery'
import Song from './song'
// import test from './actions'

const App = React.createClass({


	render(){
		return(
			<div>


				<button>App</button>		
				{this.props.children}				
			</div>
		)
	}
})

export default App