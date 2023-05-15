import Mypicture from'../img/Mypicture.jpg';
import '../components/style1.css';
function Student(){
    const mystyle ={background: '#F5F5DC',
                    color:'red',
                    fontSize:'18px',
                    fontFamily:'Lucida'
    };
    return(
        <div style={mystyle}>
            <h2>Function Component (Student)</h2>
            <img class='center img-fluid' src={Mypicture} width='30%' alt="Ratchapoom" /> <br/>
            <div style={{textAlign:'center' , background:'wheat'}}>Name: Ratchapoom Huabiam</div>
            <div style={{textAlign:'center' , background:'wheat'}}>ID: 6402041620256</div>
            <div style={{textAlign:'center' , background:'wheat'}}>Sect: CED 2 DEA</div>
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