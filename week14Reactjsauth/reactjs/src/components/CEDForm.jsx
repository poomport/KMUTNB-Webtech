import { useState } from 'react';

function CEDForm(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [dept, setDept] = useState("");
    const [comment, setComment] = useState("");
    const [accept, setAccept] = useState(false);

    function submitHandler(event) {
        event.preventDefault();
        let msg = "";
        msg += "Name: " + name + "\n";
        msg += "Gender: " + gender + "\n";
        msg += "Dept: " + dept + "\n";
        msg += "Comment: " + comment + "\n";
        msg += "Accept: " + accept + "\n";
        window.alert(msg);
    }

    return (<div >
        {
            props.user ? ( // user is logged in. 
                <div style={{ background: '#F5F5DC' }}>
                    <h1 style={{ color: '#F0E68C', background: '#191970' }}>CED Form</h1><br />
                    <div style={{ backgroundColor: 'BLACK', color: '#7FFF00', paddingLeft: '30px' }}> <br />
                        PrintScreen <br />
                        ___________________________________________<br />
                        Name: {name} <br />
                        Gender:  {gender} <br />
                        Dept:  {dept} <br />
                        Comment: {comment} <br />
                        Accept: {accept ? "Yes" : "No"} <br /><br />
                    </div>
                    <form style={{ paddingLeft: '30px' }} onSubmit={submitHandler}><br />
                        Name: <input type="text" onChange={(e) => setName(e.target.value)} /> <br />
                        Gender:
                        <input type="radio" name="rdGender" value="Male" onChange={(e) => setGender(e.target.value)} />Male
                        <input type="radio" name="rdGender" value="Female" onChange={(e) => setGender(e.target.value)} />Female
                        <input type="radio" name="rdGender" value="LGBTQ+" onChange={(e) => setGender(e.target.value)} />LGBTQ+ <br />
                        Department:
                        <select onChange={e => setDept(e.target.value)}>
                            <option value="">-----SELECT Dept-----</option>
                            <option value="CE">Civil Engineering</option>
                            <option value="CED">Computer Education</option>
                            <option value="TE">Electrical Engineering</option>
                            <option value="TM">Mechanical Engineering</option>
                        </select> <br />
                        Comment:<br />
                        <textarea placeholder='Enter your comment....' col={100} rows={4} onChange={(e) => setComment(e.target.value)} ></textarea> <br />
                        Do you accept this?:
                        <input type="checkbox" onClick={(e) => setAccept(e.target.checked)} />
                        <br /><br /> <input type="submit" value="Send Data" className="btn btn-success text-white" />
                    </form><br />
                </div>
            ) : ( // user is not logged in.
                <h3 className='text-secondary text-danger' style={{ border: '2px solid ' }}>" You are not allowed to read webpage. "<br />"if you are not logged in.
                    Please login first!!! "</h3>

            )

        }<br /><br />
    </div>)

}
export default CEDForm;