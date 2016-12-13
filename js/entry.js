import {createStore} from 'redux'
import {Provider} from 'react-redux'
import appContainer from './appcontainer'
import React from 'react'
import {render} from 'react-dom'
import store from './store'
import {browserHistory,Link,Router,Route,IndexRoute} from 'react-router'
import App from './app'
import Song from './song'
import Artist from './artist'
import artistContainer from './artistcontainer'
import playlistContainer from './playlistcontainer'
import createplaylistContainer from './createplaylistcontainer'
import navbarContainer from './navbarcontainer'
import songContainer from './songcontainer'



		// <Display/>
        // <Route path="foo" component={Foo}/>
        // <Route path="bar" component={Bar}/>
// var Visual=

// )
const routes = (
		<Route path="/" component={navbarContainer}>
		    <IndexRoute component={appContainer}/>
		    <Route path="/artist" component={artistContainer}/>
		    <Route path="/songs" component={songContainer}/>
		    <Route path="/playlist" component={playlistContainer}/>
		    <Route path="/createplaylist" component={createplaylistContainer}/>
		</Route>
)


render(
<Provider store={store}>
	<Router history={browserHistory} routes={routes}/>

</Provider>
	,document.getElementById('root')
)
