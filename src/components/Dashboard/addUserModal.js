import React,{useState} from 'react';
import cn from 'classnames';
import "../../style/dashboard.scss";
import { connect } from 'react-redux';
import {onsubmitValidation, validateEmail} from '../utils';
import { addUser} from './apiCalls'


const AddUser = (props) =>{

    let {closeModal, dispatch}  = props;

    const [data, setData] = useState({})
    const [error, setError] = useState({})

    const validateFields = {
        email : {
            required : true,
            errorMessage : 'Email is required'
        },
        firstName : {
            required : true,
            errorMessage : 'First Name is required'
        },
        lastName : {
            required : true,
            errorMessage : 'Last Name is required'
        },
        gender : {
            required : true,
            errorMessage : 'Gender is required'
        },
        mobile : {
            required : true,
            errorMessage : 'Mobile Number is required'
        },
        dob : {
            required : true,
            errorMessage : 'Date of Birth is required'
        }
    }

    const changeHandler = (e) =>{
        let {name, value} = e.target;
         setData({ ...data, [name]: value });
         
         delete error[name]
         setError({ ...error});
         if(name === 'email' && !validateEmail(value)){ 
            setError({ ...error, [name]: 'Enter a valid email address' });
        }
    }

    const radioChangeHandler = (e) =>{
        setData({...data,
            [e.target.name]: !e.target.checked ? "false" : "true"
        })
        delete error[e.target.name]
         setError({ ...error});
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const errorObject = await onsubmitValidation(
            data,
            validateFields,
            setError
        );
        if (!Object.keys(errorObject).length){
            addUser(dispatch, data) // Add user api call
            closeModal()
        }
    }

    return( 
    <>
        <div id="ModalLoginForm" className="modal ">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <h1>Add User</h1>
                        <form role="form" method="POST" action="">
                            <div className="form-group mb-3">
                                <label className="control-label">First name</label>
                                <div>
                                    <input type="text" className={cn("form-control input-lg", error.firstName ? 'error' : '') }name="firstName"  onChange={changeHandler}/>
                                    {error.firstName && <span className='error-text'>{error.firstName}</span>}
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label className="control-label">Last Name</label>
                                <div>
                                    <input type="text" className={cn("form-control input-lg", error.lastName ? 'error' : '') }  name="lastName"  onChange={changeHandler}/>
                                    {error.lastName && <span className='error-text'>{error.lastName}</span>}
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label className="control-label">Mobile Number</label>
                                <div>
                                    <input type="number" className={cn("form-control input-lg", error.mobile ? 'error' : '') } name="mobile" onChange={changeHandler}/>
                                    {error.mobile && <span className='error-text'>{error.mobile}</span>}
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label className="control-label">Mail</label>
                                <div>
                                    <input type="email" className={cn("form-control input-lg", error.email ? 'error' : '')} name="email" onChange={changeHandler}/>
                                    {error.email && <span className='error-text'>{error.email}</span>}
                                </div>
                            </div>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                    <div className="form-group mb-3">
                                    <label className="control-label">Gender</label>
                                    <div className='d-flex'>
                                        <div className="form-check ">
                                        <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" onChange={radioChangeHandler}/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Male
                                        </label>
                                        </div>
                                        <div className="form-check mb-3">
                                        <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" onChange={radioChangeHandler}/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Female
                                        </label>
                                        </div>
                                    </div>
                                    {error.gender && <span className='error-text'>{error.gender}</span>}

                                    </div>
                                    </div>
                                    <div className='col-lg-6'>
                                    <div className="form-group mb-3">
                                        <label className="control-label">DOB</label>
                                        <div>
                                            <input type="date" className={cn("form-control input-lg", error.dob ? 'error' : '')} name="dob" onChange={changeHandler}/>
                                            {error.dob && <span className='error-text'>{error.dob}</span>}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            
                            
                            <div className="form-group mb-3">
                                <div className='d-flex'>
                                    <button type="submit" className="btn btn-success" onClick={handleSubmit}>
                                        Register
                                    </button>
                                    <button type="submit" className="btn btn-success close" onClick={closeModal}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}

const mapStateToProps = state => {
    return {
        tableData: state.data
    }
}

export default connect(mapStateToProps)(AddUser)