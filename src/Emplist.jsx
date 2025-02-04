import React, { useEffect, useState } from 'react'
import { delemp, listemps } from './EmployeeServices';
import { useNavigate } from 'react-router';

function Emplist() {

const [emps,setEmps] = useState([])

const navi = useNavigate();

useEffect(()=>{
   getallemps();
},[]);

const getallemps = () =>{
    listemps().then((response)=>{
        setTimeout(() => {
            setEmps(response.data);
        }, 320);
    }).catch(error=>console.error(error));
}

const deleteEmp = (id) =>{
    delemp(id).then((resp)=>{
        getallemps();
    }).catch((err)=>{
        console.error(err);
    });
}

  return (
    <div className="container text-center">
        <h2 className='pt-2 pb-1'>List of Employees</h2>
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

            {emps.map(e=>{
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
    <button className='btn btn-success' onClick={()=>{navi("/add-employee")}}>Add employee</button>
    </div>
  )
}

export default Emplist