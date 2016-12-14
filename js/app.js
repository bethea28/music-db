import React from 'react'
import $ from 'jquery'
import Song from './song'
// import test from './actions'

const App = React.createClass({

	componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/auth'
    })
    .done((username) => {
    	console.log(username	)
      if(username) {
        console.log(username + ' is logged in!');
        this.setState({username: username});
      } else {
        console.log('No on is logged in');
      }
    })
  },


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