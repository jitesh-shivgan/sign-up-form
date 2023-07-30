import './form.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


const Form = () => {
    const [selectedCity, setSelectedCity] = useState('select');
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [name, setName] = useState('');
    const navigate=useNavigate(); //Access the history object


    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleLanguageChange=(event) => {
        setSelectedLanguages([...selectedLanguages, event.target.value]);
    }

    const handleNameChange=(event)=>{
        setName(event.target.value);
    }

    const onSubmitHandler=(event)=>{
            event.preventDefault();
            //Access form data here
            const uniqueLanguages=[...new Set(selectedLanguages)];
            const formData={
                name: name,
                city: selectedCity,
                languages: uniqueLanguages,
            }
            console.log('FORM DATA:', formData);

            // Navigate to the UserDetailsPage and pass formData as state
            navigate("/user-details", { state: { formData: formData } });
    }


    return(
        <div id='container'>
        <div id='form-container'>
            <h1>Sign up form</h1>
            <form onSubmit={onSubmitHandler}>
                <input type='text' placeholder='Name' required onChange={handleNameChange}></input>
                <select id="city" name="city" value={selectedCity} onChange={handleCityChange}>
                    <option value="select">Select City</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Gurugram">Gurugram</option>
                    <option value="Chennai">Chennai</option>
                </select>
                <select id="language" name="language" value={selectedLanguages} onChange={handleLanguageChange} required>
                    <option value="select">Select Languages</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="English">English</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    )

}

export default Form;