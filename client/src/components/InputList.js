import React, { Fragment, useState } from "react";

const InputList = () => {

    // hooks useState setting default value of an empty string to const 
    // description is the state
    // setDescription is when state is changed
    // ("") -> is the default value
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [birth_date, setBirthDate] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [address_info, setAddressInfo] = useState("");
    const [notes, setNotes] = useState("");

    // Submitting data
    const onSubmitForm = async(e) => {
        // preventing to refresh
        e.preventDefault();
        try {
            const body = {first_name, last_name, birth_date, phone_number, address_info, notes };
            // fetch request data
            // same procedures from postman
            // await for guess what? wait :)
            const response = await fetch("http://localhost:5000/list", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            // Once onSubmit form is completed, refresh to the previous screen / -> home
            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Add a favorite person.</h1>
            {/* onSubmit constant on form */}
            <form className="mt-5 was-validated" onSubmit={onSubmitForm}>
                {/* d-flex for elements being together & margin top 5 */}
                {/* I set the const in value. It shows the default value of state, which is "" empty string */}
                <input type="text" className="form-control mt-3" placeholder="First Name:" value={first_name} onChange={e => 
                    setFirstName(e.target.value)} required/>
                <input type="text" className="form-control mt-3" placeholder="Last Name:" value={last_name} onChange={e => 
                    setLastName(e.target.value)} required/>
                <input type="text" className="form-control mt-3" placeholder="Birth Date:" value={birth_date} onChange={e => 
                    setBirthDate(e.target.value)} required/>

                <input type="text" className="form-control mt-3" placeholder="Phone Number:" value={phone_number} onChange={e => 
                    setPhoneNumber(e.target.value)} required/>

                <input type="text" className="form-control mt-3" placeholder="Address:" value={address_info} onChange={e => 
                    setAddressInfo(e.target.value)} required/>

                <input type="text" className="form-control mt-3" placeholder="Notes:" value={notes} onChange={e => 
                    setNotes(e.target.value)}/>
                    {/* onChange gets the new input value and set on setDescription, changing the default value "" to the new value inserted on input field */}
                <button className="mt-3 btn btn-success btn-lg btn-block">Add</button>
            </form>
        </Fragment>
    )
}

export default InputList;