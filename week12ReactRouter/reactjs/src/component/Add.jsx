import { useState } from 'react';
import '../component/stylebutton.css';
export default function Add() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [studentid, setStudentID] = useState("");
    function submitHandler(e) {
        e.preventDefault();
        let msg = "";
        msg += "Firstname: " + firstname + "\n";
        msg += "Lastname: " + lastname + "\n";
        msg += "StudentID: " + studentid + "\n";
        window.alert(msg);
        window.alert('Add Data Complete');
    }
    return (

        <div><br />
            <h1 style={{ textAlign: 'center', color: '#fff', background: '#556B2F' }}>CED2RA Add</h1><br />
            <p>
                Welcome to the CED2RA class learning web technologies. Courses for creating web designers.
                <form onSubmit={submitHandler}><br />
                    Firstname: <input type="text" onChange={(e) => setFirstName(e.target.value)} /> <br /> <br />
                    Lastname: <input type="text" onChange={(e) => setLastName(e.target.value)} /> <br /> <br />
                    StudentID: <input type="text" onChange={(e) => setStudentID(e.target.value)} /> <br /> <br />
                    <input type="submit" value="Send Data" className="button-29" role="button" />

                </form>
            </p>
        </div >

    );
}