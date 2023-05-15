import { Link } from "react-router-dom"
import '../component/stylebutton.css';
import '../component/style1.css';
export default function Menu() {
    return (
        <div style={{ marginBottom: 10 }}>
            <Link style={{ margin: 5 }} to='/'>
                <button className="button-29" role="button">Home</button>
            </Link>
            <Link style={{ margin: 5 }} to="/add">
                <button className="button-29" role="button">Add</button>
            </Link>
            <Link style={{ margin: 5 }} to="/edit">
                <button className="button-29" role="button">Edit</button>
            </Link><br /><br />
            <Link style={{ margin: 5 }} to="/cedform">
                <button className="button-29" role="button">CEDFORM</button>
            </Link>
            <Link style={{ margin: 5 }} to="/student">
                <button className="button-29" role="button">Student</button>
            </Link><br /><br />
            <Link style={{ margin: 5 }} to="/reactevent">
                <button className="button-29" role="button">ReactEvent</button>
            </Link>
            <Link style={{ margin: 5 }} to="/reactstate">
                <button className="button-29" role="button">ReactState</button>
            </Link>

        </div>
    )
}
