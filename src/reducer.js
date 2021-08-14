export const initialState={
    user:null,
    playlistsl:[],
    playing:false,
    item:null,
    //this is used to automatically authenticate.Remove after finished developing
    // token:'BQDVFjdwGD4m5VLoissUGNa39MRwFtnhGiNNwlV1l0YEt6v8w-kfz6IyN2e4NNfhPCct627Sm4M5ZqQACoZNOiNNdQHu_W9gbMXtfI4oGJN4sDO1JXn0_lvqETM3LiSYCfHDFwgMIf3oTJ3he-IucUq3-ZBduiFlX0k',
}

const reducer=(state,action)=>{
console.log(action);
//Action-> type,[payload]
switch(action.type)
{
    case 'SET_USER':
        return {
            ...state,
            user: action.user
        }
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        }
    case 'SET_PLAYLISTS':
        return{
            ...state,
            playlists:action.playlists
        }
    case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discover_weekly:action.discover_weekly

        }
    default:
        return state;
}
}
export default reducer