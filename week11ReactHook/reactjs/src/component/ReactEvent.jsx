import '../component/style1.css';
const ReactEvent = () =>{
    const clickHandler = (event,name) => {
        window.alert("Hello "+name);
        window.alert(event.target.innerHTML);
    }
    return(
        <div>
            <h3>React Event(CED)</h3>
            <button onClick={(e) => {
                clickHandler(e,"Ratchapoom");
            }} className="btn btn-danger text-white">Click me!!!</button>
        </div>
    );
}
export default ReactEvent;