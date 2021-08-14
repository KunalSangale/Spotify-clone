import './App.css';
import { useEffect } from 'react';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';
const spotify=new SpotifyWebApi();
function App() {
  
  const [{user,token},dispatch]=useDataLayerValue();//to actually get the values, pass the value name in the {} dispatch is used to change/update the datalayer
  useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash="";//to remove the token from the url
    const _token=hash.access_token;
    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token:_token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists)=>
      {
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })
      });
      spotify.getPlaylist('37i9dQZEVXcFNEHSQew23e').then(response=>
       { dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        })
      });
    }
    console.log(token);
    
  },[]);
  console.log('person',user);//to test whether we actually get the user
  console.log('token',token);
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ):
        (
          <Login/>
        )
      }
    
    </div>
  );
}

export default App;
