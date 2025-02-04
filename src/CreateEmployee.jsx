import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

function CreateEmployee() {

  let navi = useNavigate();

  const creatEmp = (formData) =>{
    let inp = Object.fromEntries(formData);
    axios.post("http://localhost/api/emp/create",{
      "fname":inp.form_fname,
      "lname":inp.form_lname,
      "email":inp.form_email
    });
    navi("/");
  } 

  return (
    <div className="container border" style={{maxWidth:"60%",marginTop:"5%"}}>
      <h2 className='pt-2 text-center'>Add Employee</h2>
      <form action={creatEmp}>
      <label className='form-label fs-5 pt-1 ps-1' htmlFor="fin1">First Name:</label>
      <input required className='form-control' type="text" name="form_fname" placeholder='Enter first name' id="fin1" />
      <label className='form-label fs-5 pt-1 ps-1' htmlFor="fin2">Last Name:</label>
      <input required className='form-control' type="text" name="form_lname" placeholder='Enter last name' id="fin2" />
      <label className='form-label fs-5 pt-1 ps-1' htmlFor="fin3">Email:</label>
      <input required className='form-control' type="text" name="form_email" placeholder='Enter email' id="fin3" />
      <div className="row justify-content-center py-2">
                <div className="col-auto">
                    <button className="btn btn-success">Submit</button>
                </div>
            </div>
      </form>
    </div>
  )
}

export default CreateEmployee