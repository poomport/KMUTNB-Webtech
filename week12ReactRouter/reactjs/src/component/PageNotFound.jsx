import { Link } from 'react-router-dom';
import '../component/stylebutton.css';
const PageNotFound = () => {
    return (
        <div><br />
            <h1 style={{ textAlign: 'center', color: '#fff', background: '#556B2F' }}>PageNotFound</h1>
            <p>
                This is no page you are requesting.
            </p>
            <Link style={{ margin: 5 }} to='/'><button className="button-29" role="button">Back to Homepage</button></Link>

        </div>
    )
}
export default PageNotFound;