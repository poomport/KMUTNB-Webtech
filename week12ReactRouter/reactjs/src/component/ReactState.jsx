import { useState } from "react";
import '../component/style1.css';
const ReactState = () => {
    const [stdPhone, setStdPhone] = useState({
        name: "Ratchapoom",
        tel: "089-077-2237"
    });

    const updateTel = () => {
        setStdPhone(oldValue => {
            return { ...oldValue, name: "XXX", tel: "YYY" }
        })
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: '#fff', background: '#556B2F' }}>React State (CED)</h1><br />
            Name: {stdPhone.name}<br />
            Tel : {stdPhone.tel} <br /><br />
            <button onClick={updateTel} className="btn btn-success text-white">Update Tel</button>
        </div>
    );
}
export default ReactState;
/*
import { useState } from "react";

const ReactState = () =>{
    const [count,setCount] = useState(0);
    
    const clickHandler = () => {
        var temp = count;
        temp = temp + 1;
        setCount(temp);  //<-- function to modify state
    }
 
    return(
    <div>
        <h4>React State (CED)</h4>
        Count: {count}
        <br/>
        
        <button onClick={clickHandler}  className="btn btn-success text-white">Increment</button> 
        <button onClick={()=>{
            setCount(0);
        }}  className="btn btn-danger text-white">Reset</button>
    </div>
    );
}
export default ReactState;
*/