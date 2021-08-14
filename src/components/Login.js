import "../css/Login.css"
import { loginUrl } from "../spotify"
function Login() {
    return (
        <div className="login">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Spotify Logo"/>
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login
