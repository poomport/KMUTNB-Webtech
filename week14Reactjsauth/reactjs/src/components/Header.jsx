import '../components/stylebutton.css';
const Header = (props) => {
    return (
        <div>
            <h1 className='text-center' style={{ background: '#191970', color: '#EEE8AA' }}>
                Firebase Authentication with Google Account</h1><br />
            {props.user ? ( // user is logged in.
                <div className="d-flex justify-content-between " >
                    <div>
                        <b>Welcome: </b> {props.user.displayName}
                        <span> : </span>
                        <img src={props.user.photoURL} width={30} alt='user' />
                    </div>
                    <div>
                        <button className='button-32' role="button"
                            onClick={props.logout}>Logout</button>
                    </div>
                </div>
            ) : ( // user is not logged in.
                <div className="d-flex justify-content-between " >
                    <div style={{
                        color: '#191970', fontSize: '20px'
                    }}>
                        You are not logged in.
                    </div>
                    <div>
                        <button className='button-33' role="button"
                            onClick={props.login}>Login</button>
                    </div>
                </div>)
            }
        </div>
    );
}
export default Header;