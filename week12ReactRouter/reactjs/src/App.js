import Home from "./component/Home";
import Add from "./component/Add";
import Edit from "./component/Edit";
import Menu from "./component/Menu";
import PageNotFound from "./component/PageNotFound";
import Student from './component/Student';
import CED from './component/CED';
import ReactEvent from './component/ReactEvent';
import ReactState from './component/ReactState';
import CEDForm from './component/CEDForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  const std = {
    id: "6402041620256",
    name: "RATCHAPOOM H.",
    tel: "0890772237"
  };
  const stdName = [{ name: 'Alex', id: '64001', tel: '083-295-6938' },
  { name: 'Steve', id: '64002', tel: '089-034-9835' },
  { name: 'Jack', id: '64003', tel: '081-609-2983' }];
  return (

    <div className="container" ><br /><br />
      <h1 className="text-center text-warning bg-primary">React Router</h1><br />
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/cedform' element={<CEDForm />} />
          <Route path='/student' element={<Student />} />
          <Route path='/reactstate' element={<ReactState />} />
          <Route path='/reactevent' element={<ReactEvent />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <hr />

    </div>
  )
}

export default App;

/*
import Student from './component/Student';
import CED from './component/CED';
import ReactEvent from './component/ReactEvent';
import ReactState from './component/ReactState';
import CEDForm from './component/CEDForm';

function App() {
  const std = {
    id: "6402041620256",
    name: "RATCHAPOOM H.",
    tel: "0890772237"
  };
  const stdName = [{ name: 'Alex', id: '64001', tel: '083-295-6938' },
  { name: 'Steve', id: '64002', tel: '089-034-9835' },
  { name: 'Jack', id: '64003', tel: '081-609-2983' }];

  return (
    <div>

      <h1 style={{
        textAlign: 'center',
        color: 'yellow', backgroundColor: '#6495ED',
        fontSize: '32px'
      }}>React CED 2 RA</h1>
      <p style={{ textAlign: 'center' }}>This is a new paragraph.</p>
      <hr />
      <Student />
      <hr />
      <CED stdInfo={std} />
      <ol>

        {stdName.map(function (std) {
          return <li key={std.id}><CED stdInfo={std} /></li>
        })}
      </ol>
      <ReactEvent /><hr />
      <ReactState /><hr />
      <CEDForm /><hr />

    </div>);
}

export default App;
*/