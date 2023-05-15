import Mypicture from '../img/Mypicture.jpg';
import '../component/style1.css';
function Student() {
    const mystyle = {
        background: '#F5F5DC',
        fontSize: '18px',
        fontFamily: 'Lucida'
    };
    return (
        <div style={mystyle}>
            <h1 style={{ textAlign: 'center', color: '#fff', background: '#556B2F' }}>Function Component (Student)</h1>
            <img class='center img-fluid' src={Mypicture} width='30%' alt="Ratchapoom" /> <br />
            <p style={{ textAlign: 'center', background: '#F4A460' }}>
                Hi. My name is Ratchapoom Huabiam.
                My nickname is poom.<br /> Gender: Male.
                Occupation: undergraduate student.<br />
                Student ID : 6402041620256
                Faculty of Technical Education<br />
                Department of Computer Education.
                I'm sophomore. <br />
            </p>
        </div>
    );

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