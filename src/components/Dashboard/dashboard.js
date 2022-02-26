import React,{useEffect, useState} from 'react';
import Table from '../common/Table/table';
import "../../style/dashboard.scss";
import { connect } from 'react-redux';
import AddUser from './addUserModal';
import {fetchData} from './apiCalls'

const User = (props) =>{

    let {tableData, dispatch} = props;
    let header = [
        {label: 'First Name' , key: 'firstName'}, 
        {label: 'Last Name' , key: 'lastName'}, 
        {label: 'Mobile' , key: 'mobile'}, 
        {label: 'Gender' , key: 'gender'},
        {label: 'DOB' , key: 'dob'}, 
        {label: 'email' , key: 'email'}]


    const [openModel, setOpenModel] = useState(false)

    const openModelUser = () =>{
        setOpenModel(true)
    }

    const closeModal = () =>{
        setOpenModel(false)
    }

    useEffect(()=>{
        fetchData(dispatch)
    },[])

    return( 
        <>
            <div className='dashboard'>
                <div className='dash-wrap'>
                <button type="button" className="btn btn-primary mb-5" onClick={openModelUser} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Add User
                </button>
                <Table header = {header} data={tableData || []}/>
                {openModel && <AddUser closeModal={closeModal} dispatch = {dispatch} />}
                </div>
            </div>
        </>
    )

}

const mapDispatchToProps = dispatch => {
    return {
          dispatch
    }
}


const mapStateToProps = state => {
    return {
        tableData: state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)