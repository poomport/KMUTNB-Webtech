import Mypicture from '../components/img/Mypicture.jpg';

function Student(props) {
    const mystyle = {
        background: '#F5F5DC',
        fontSize: '18px',
        fontFamily: 'Lucida'
    };
    return (<div >
        {
            props.user ? (
                <div style={mystyle} className='container'>
                    <h1 style={{ color: '#F0E68C', background: '#191970' }}>Function Component (Student)</h1>
                    <div style={{ display: 'flex' }}>
                        <img className=' img-fluid ' src={Mypicture} width='20%' alt="Ratchapoom" /> <br />

                        <p style={{ marginLeft: '30px', fontSize: '28px' }}>
                            Hi. My name is Ratchapoom Huabiam.
                            My nickname is poom.<br /> Gender: Male.
                            Occupation: undergraduate student.<br />
                            Student ID : 6402041620256
                            Faculty of Technical Education<br />
                            Department of Computer Education.
                            I'm sophomore. <br />
                        </p>
                    </div>
                </div>
            ) : ( // user is not logged in.
                <h3 className='text-secondary text-danger' style={{ border: '2px solid ' }}>" You are not allowed to read webpage. "<br />"if you are not logged in.
                    Please login first!!! "</h3>

            )

        }
    </div>)


}
export default Student;

/* // Class Component
import react from 'react';
class Student extends react.Component {
   constructor(props) {
       super(props);
       this.state = {name: "John",
                     tel: "089-358-2857"};
   }
   render() {
       return <div>
                   <h1>Hello Computer Education</h1>
                   <div>Name: {this.state.name}</div>
                   <div>Tel : {this.state.tel}</div>
              </div>
   }
}
export default Student;
*/