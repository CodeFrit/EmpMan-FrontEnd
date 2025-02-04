import React, { useEffect } from 'react'
import { useState } from 'react';
import { delemp, queryemp } from './EmployeeServices';
import { useNavigate } from 'react-router';

function Result() {

const navi = useNavigate();

const deleteEmp = (id) =>{
    delemp(id).then((resp)=>{
        navi("/");
    }).catch((err)=>{
        console.error(err);
    });
}

let [remps,setRemps] = useState([]);

useEffect(()=>{
    let loc = (""+window.location).split("/");
    let ex = loc[loc.length-1];
    queryemp(ex).then((resp)=>{
        setRemps(resp.data);
    }).catch((err)=>{
        console.error(err);
    });
},[]);

  if(remps.length>0){
    return(
    <div className="container text-center">
    <h2>List of Employees</h2>
    <table className='table table-bordered table-striped'>
    <thead>
    <tr>
    <th>Id</th>
    <th>Forename</th>
    <th>Surname</th>
    <th>Email</th>
    <th>Actions</th>
    </tr></thead>
    <tbody>

        {remps.map(e=>{
            return(
                <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.fname}</td>
                <td>{e.lname}</td>
                <td>{e.email}</td>
                <td>
                    <button className='btn btn-info' onClick={()=>{navi("/update-employee/"+e.id)}}>Update</button>
                    <button className='btn btn-danger ms-3' onClick={()=>{deleteEmp(e.id)}}>Delete</button>
                </td>
                </tr>
            );
        })}
    </tbody>
    </table>
    </div>
    )
  }else{
    const stl = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
    return <h1 style={stl}>No Results Found!</h1>
  }
}

export default Result