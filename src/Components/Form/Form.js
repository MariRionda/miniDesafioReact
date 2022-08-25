import React, { useState } from "react";
import './Form.css'

const formData = {
    name: '',
    age: '',
    hobbie: ''
};

const Form = () => {
    const [form, setForm] = useState(formData);
    const [b,setB] = useState(false)

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        if(form.name!=="" && form.age!=="" && form.hobbie!==""){
            setB(true)
        }
        else {alert("Faltan datos")}
        setForm(formData);
    }

    const handleReset = (e) => {
        e.preventDefault();
        setForm(formData);
    };

    return (
        <div className='wallpaper'>
            <div className='form-container'>
                <form className='form-div'>
                    <div className='form-items'>
                        <h1 className='form-title'>New Object</h1>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleChange}
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            id="age"
                            name="age"
                            onChange={handleChange}
                            placeholder="Age"
                        />
                        <input
                            type="text"
                            id="hobbie"
                            name="hobbie"
                            onChange={handleChange}
                            placeholder="Hobbie"
                        />
                    </div>
                    <div className='form-buttons'>
                        <button onClick={handleReset} className='btn2'> 🧹Clean </button>
                        <button onClick={handleSubmit} className='btn3'> ✔ </button>
                    </div>
                </form>
                <div>
                    {b===true?
                    <div>
                        <p>Name = {form.name}</p>
                        <p>Age = {form.age}</p>
                        <p>Hobbie = {form.hobbie}</p>
                    </div>
                    : <p></p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Form;