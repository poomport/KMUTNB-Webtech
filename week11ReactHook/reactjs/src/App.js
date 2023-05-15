import Student from './component/Student';
import CED from './component/CED';
import ReactEvent from './component/ReactEvent';
import ReactState from './component/ReactState';
import CEDForm from './component/CEDForm';

function App() {
  const std ={
    id:"6402041620256",
    name:"RATCHAPOOM H.",
    tel:"0890772237"
  };
  const stdName = [{name: 'Alex', id: '64001', tel: '083-295-6938'},
                  {name: 'Steve', id: '64002', tel: '089-034-9835'},
                  {name: 'Jack', id: '64003', tel: '081-609-2983'}];

  return (
  <div>
    <CEDForm /><hr/>
    <ReactEvent /><hr/>
    <ReactState /><hr/>
    <h1 style={{textAlign: 'center',
              color:'yellow', backgroundColor: '#6495ED',
              fontSize: '32px'}}>React CED 2 RA</h1>
    <p style={{textAlign: 'center'}}>This is a new paragraph.</p>
    <hr />
    <Student />
    <hr/> 
    <CED stdInfo={std}/> 
    <ol>
      
      {stdName.map(function(std) {
        return <li key={std.id}><CED stdInfo={std} /></li>
      })}
    </ol>
  </div>);
}

export default App;