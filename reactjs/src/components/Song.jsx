import { Link } from "react-router-dom";
import '../components/stylebutton.css';
const Song = (props) => {
    const song = props.song;
    return (
        <div className="bg-default my-3 p-3 "
            style={{ color: '#4169E1', border: 'solid 1px #CCC', boxShadow: '7px 7px 5px grey' }}>
            <div className="d-flex justify-content-between">
                <div>
                    <h4>{song.artistName}</h4>
                    <div><img src={song.artworkUrl60} alt="artwork" /></div>
                    <div>Track Name: {song.trackName}</div>
                    <div>Price: {song.trackPrice} {song.currency}</div>
                </div>
                <div>
                    <Link to={'/preview'} state={props.song}>
                        <button className="button-29" role="button">
                            Song Preview</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Song;