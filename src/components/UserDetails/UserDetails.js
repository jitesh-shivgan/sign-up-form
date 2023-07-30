import './userDetails.css'
import { useLocation } from 'react-router-dom';

const UserDetails=()=>{
    const location=useLocation();
    const formData = location.state ? location.state.formData : null;

    if (!formData) {
      // If formData is null or undefined, handle the situation accordingly
      return <div>No form data available.</div>;
    }
    console.log(formData);
    return(
        <div id='user-details-container'>
            <h1>User Details</h1>
            <p>Name: <span className='user-details'>{formData.name}</span></p>
            <p>City: <span className='user-details'>{formData.city}</span></p>
            <p>Language: {formData.languages.map((language)=><span className='user-details'>{language} </span>)}</p>
        </div>
    );
}

export default UserDetails;