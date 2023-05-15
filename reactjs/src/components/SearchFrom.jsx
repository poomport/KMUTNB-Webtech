import { useState } from "react";
import '../components/stylebutton.css';
const SearchForm = (props) => {
    const [term, setTerm] = useState("");
    const [entity, setEntity] = useState("musicTrack");
    const [limit, setLimit] = useState(10);

    const searchHandler = (e) => {
        e.preventDefault();
        if (term === '' || entity === '') {
            window.alert("Please enter all search data");
            return;
        }
        const params = {
            term: term,
            entity: entity,
            limit: limit
        }
        props.searchSong(params);
    }
    return (
        <form onSubmit={searchHandler} className="w-75 mx-auto "><br />
            <label style={{ paddingRight: '20px', fontSize: '24px' }}>Term: </label>
            <input type="text" placeholder="Search Term" onChange={(e) => setTerm(e.target.value)} /><br />
            <label style={{ paddingRight: '20px', fontSize: '24px' }}>Entity: </label>
            <input type="radio" name="rdEntity" value="musicVideo" checked={entity === 'musicVideo' && 'checked'} onChange={e => setEntity(e.target.value)} /> Video

            <input style={{ marginLeft: '20px' }} type="radio" name="rdEntity" value="musicTrack" checked={entity === 'musicTrack' && 'checked'} onChange={e => setEntity(e.target.value)} /> Audio
            <br /><label style={{ paddingRight: '20px', fontSize: '24px' }}>Limit: </label>
            <input type="number" min={1} max={50} value={limit}
                onChange={e => setLimit(e.target.value)} />
            <input style={{ marginLeft: '20px' }} type='submit' value='Search' className="button-29" role="button" />
        </form>
    );
}
export default SearchForm;
