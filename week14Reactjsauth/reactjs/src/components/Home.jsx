import { useEffect } from "react";


const Home = (props) => {
    //If not using session storage, not necessary to implement useEffect()
    useEffect(() => { //
        let userInfo = JSON.parse(window.sessionStorage.getItem('user'));
        //console.log("Temp: ", temp.displayName);
        //console.log("Session: ", window.sessionStorage.getItem('user'));
        //console.log("Local:", localStorage.getItem('user'));
    }, [])
    return (<div >
        {
            props.user ? ( // user is logged in. 
                <div style={{ background: '#F5F5DC' }}>
                    <p style={{ fontSize: '28px', background: '#191970', color: 'white' }}>Hi {props.user.displayName} Welcome to Webpage.</p>
                    <p style={{ fontSize: '28px', color: '	#DB7093' }}>Now!!! You can read Website.
                    </p><h2 className='my-3' style={{ background: '#191970', color: '#F0E68C' }}>Home Page</h2>
                    <div>
                        <img src={props.user.photoURL} alt='user' />
                    </div>
                    <h4 className=' text-secondary my-2 py-2' >
                        {props.user.displayName}
                    </h4>


                    <br />

                </div>
            ) : ( // user is not logged in.
                <h3 className='text-secondary text-danger' style={{ border: '2px solid ' }}>" You are not allowed to read webpage. "<br />"if you are not logged in.
                    Please login first!!! "</h3>

            )

        }
    </div>)
}
export default Home;
