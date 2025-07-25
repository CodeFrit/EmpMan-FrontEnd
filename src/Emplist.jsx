import React, { useEffect, useState } from 'react'
import { delemp, listemps } from './EmployeeServices';
import { useNavigate } from 'react-router';

const Empinfo = ({data}) => {
    const navi = useNavigate();
    return (
        <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.fname}</td>
            <td>{data.lname}</td>
            <td>{data.email}</td>
            <td>
                <button className='btn btn-info' onClick={()=>{navi("/update-employee/"+data.id)}}>Update</button>
                <span className='invisible'>---</span>
                <button className='btn btn-danger' onClick={()=>{deleteEmp(data.id)}}>Delete</button>
            </td>
        </tr>
    )
}

function Emplist() {

const [emps,setEmps] = useState([])

const navi = useNavigate();

useEffect(()=>{
    let debounce1 = setTimeout(() => {
        getallemps();
    }, 100);
    return () => clearTimeout(debounce1);
},[]);

const getallemps = () =>{
    listemps().then((response)=>{
        setEmps(response.data);
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
    <>
    {emps.length>0 ? 
        <div className="container text-center">
        <h2 className='pt-2 pb-1'>List of Employees</h2>
        <table className='table table-bordered table-striped'>
        <thead style={{whiteSpace:"pre"}}>
        <tr>
        <th>   Id   </th>
        <th> Forename </th>
        <th> Surname </th>
        <th>Email</th>
        <th>Actions</th>
        </tr></thead>
        <tbody>
            {emps.map(e=><Empinfo key={e.id} data = {e}/>)}
        </tbody>
        </table>
        <button className='btn btn-success mb-4' onClick={()=>{navi("/add-employee")}}>Add employee</button>
        </div>
        : 
        <div style={styles.cent}>
            <h1>No data</h1>
            <br />
            <button className='btn btn-success mb-4' onClick={()=>{navi("/add-employee")}}>Add an employee</button>
        </div>}
    </>
  )
}

const styles = {
    cent:{
    width:"100%",
    height:"90vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"}
}

export default Emplist
