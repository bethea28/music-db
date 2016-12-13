import React from 'react'
import {Link} from 'react-router'
// import appContainer from './appcontainer'
// import artistContainer from './artistcontainer'


var Navbar = React.createClass({
	render(){
		return (

			<div>
				<ul>
				  <li> <Link to='artist'>Artist</Link></li>
				  <li> <Link to='songs'>Songs</Link></li>
				  <li> <Link to='playlist'>Playlist</Link></li>
				  <li> <Link to='createplaylist'>Create Playlist</Link></li>
				  
				</ul>
				{this.props.children}
			</div>
		)
	}
})

export default Navbar