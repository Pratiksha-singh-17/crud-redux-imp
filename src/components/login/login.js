import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cn from 'classnames';
import {validateEmail, validatePassword, onsubmitValidation} from '../utils'
import "../../style/login.scss";

const passwordFormat = "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character";

export default function Login() {

    const navigate = useNavigate();
 
    const [data, setData] = useState({})
    const [error, setError] = useState({})

    const handleSubmit = async(event) => {
        event.preventDefault();
        const errorObject = await onsubmitValidation(
            data,
            validateFields,
            setError
        );
        if (!Object.keys(errorObject).length){
            navigate('/dashboard')
        }

    };

    const validateFields = {
        email : {
            required : true,
            errorMessage : 'Email is required'
        },
        password : {
            required : true,
            errorMessage : 'Password is required'
        }
    }

    const changeHandler = (e) =>{
        
        let {name, value} = e.target;
        if(value) {
         setData({ ...data, [name]: value });
         delete error[name]
         setError({ ...error});
         if(name === 'email' && !validateEmail(value)){ 
             setError({ ...error, [name]: 'Enter a valid email address' });
         }else if(name === 'password' && !validatePassword(value)){
             setError({ ...error, [name]: passwordFormat });
         }
        }else if(validateFields[name].required){
             setError({ ...error, [name]: validateFields[name].errorMessage });
        }
     }


  return (
    <div className="app">
        <div className="login-form">
            <div className="form">
            <form onSubmit={handleSubmit}>
            <h1>Log In</h1>
            <div className="input-container">
                <label>Username </label>
                <input type="text" name="email"  onChange={changeHandler} className={error.email ? 'error' : ''}/>
                {error.email && <span className='error-text'>{error.email}</span>}
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="password" onChange={changeHandler} className={error.password ? 'error' : ''}/>
                {error.password && <span className='error-text'>{error.password}</span>}
            </div>
            <div className="button-container">
                <input type="submit" />
            </div>
            </form>
            </div>
        </div>
    </div>
);
}