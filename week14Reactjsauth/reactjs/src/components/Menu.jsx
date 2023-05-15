import { Link } from "react-router-dom"
import '../components/stylebutton.css';

export default function Menu() {
    return (
        <div style={{ marginBottom: 10 }}>
            <Link style={{ margin: 5 }} to='/'>
                <button className="button-52" role="button">Home</button>
            </Link>
            <Link style={{ margin: 5 }} to="/student">
                <button className="button-52" role="button">Student</button>
            </Link>
            <Link style={{ margin: 5 }} to="/cedform">
                <button className="button-52" role="button">CEDFORM</button>
            </Link>
            <br /><br />

        </div>
    )
}
