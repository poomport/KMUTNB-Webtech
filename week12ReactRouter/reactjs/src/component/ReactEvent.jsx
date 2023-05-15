import '../component/style1.css';
const ReactEvent = () => {
    const clickHandler = (event, name) => {
        window.alert("Hello " + name);
        window.alert(event.target.innerHTML);
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: '#fff', background: '#556B2F' }}>React Event(CED)</h1><br />
            <button onClick={(e) => {
                clickHandler(e, "Ratchapoom");
            }} className="btn btn-danger text-white">Click me!!!</button>
        </div>
    );
}
export default ReactEvent;