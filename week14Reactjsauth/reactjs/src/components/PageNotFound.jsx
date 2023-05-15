import { Link } from 'react-router-dom';
import '../components/stylebutton.css';
const PageNotFound = () => {
    return (
        <div><br />
            <h1 style={{ color: '#F0E68C', background: '#191970' }}>PageNotFound</h1>
            <p>
                This is no page you are requesting.
            </p>
            <Link to='/'><button className='button-32' role="button">Back to Homepage</button></Link>

        </div>
    )
}
export default PageNotFound;