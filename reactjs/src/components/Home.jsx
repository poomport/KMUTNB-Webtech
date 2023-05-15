import { useEffect, useState } from "react";
import Song from "./Song";

const Home = (props) => {
    const [musicList, setMusicList] = useState(props.songs);

    useEffect(() => {
        setMusicList(props.songs);
    }, [props.songs])
    return (
        <div className="w-75 mx-auto ">
            {
                musicList.map((song, id) => {
                    return <Song song={song} key={id} />
                })
            }
        </div>);
}
export default Home;
