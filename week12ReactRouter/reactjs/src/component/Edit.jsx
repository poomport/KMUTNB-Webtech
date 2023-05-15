import { useState } from 'react';
const Edit = function () {
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
        window.alert('Edit Data Complete');
    }
    return (
        <div><br />
            <h1 style={{ textAlign: 'center', color: '#fff', background: '#556B2F' }}>CED2RA Edit</h1><br />
            Edit your data!!!
            <p>
                <form onSubmit={submitHandler}><br />
                    Firstname: <input type="text" placeholder='Please enter Firstname' onChange={(e) => setFirstName(e.target.value)} /> <br /> <br />
                    Lastname: <input type="text" placeholder='Please enter Lastname' onChange={(e) => setLastName(e.target.value)} /> <br /> <br />
                    StudentID: <input type="text" placeholder='Please enter StudentID' onChange={(e) => setStudentID(e.target.value)} /> <br /> <br />
                    <input type="submit" value="Send Data" className="button-29" role="button" />

                </form>
            </p>

        </div>
    )
}
export default Edit;