import react from 'react'
import store from './store'

var defaultState={
	songs:[],
	artist:[],
	tempPlaylistName:'',
	finalPlaylistName:''
}

var reducer=(oldState=defaultState,action)=>{
	switch(action.type){
		case 'allsongs':
			return Object.assign({},oldState,{songs:store.getState().songs.concat(action.data)})
		case 'allartist':
			return Object.assign({},oldState,{artist:store.getState().artist.concat(action.data)})
		case 'tempPlaylistName':
			return Object.assign({},oldState,{tempPlaylistName:action.data})
		default:
			return oldState
	}
}

export default reducer