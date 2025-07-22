import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { getemp, updateEmp } from './EmployeeServices';

function UpdateEmployee() {

    let navi = useNavigate();
    //[fname,lname,email]
    let [form_dat,setFormData] = useState(["Enter first name","Enter last name","Enter email"])
    let loc = (""+location).split("/");
    let eid = loc[loc.length-1];

    const handleChange = (ev,n) =>{
      setFormData(form_dat.map((d,index)=>{
        if (index == n){
          return ev.currentTarget.value;
        }else{
          return d;
        }
      }))
    }

    useEffect(()=>{
      getemp(eid).then((resp)=>{
        let emp = resp.data;
        setFormData([emp.fname,emp.lname,emp.email])
      });
    },[]);

    const updEmp = async (formData) =>{
    let inp = Object.fromEntries(formData);
    await updateEmp(eid,inp).catch((err)=>{
      console.error(err);
    });
    navi("/");
    } 

  return (
    <div className="container border" style={{maxWidth:"60%",marginTop:"5%"}}>
      <h2 className='pt-2 text-center'>Update Employee</h2>
      <form action={updEmp}>
      <label className='form-label fs-5 pt-1 ps-1' htmlFor="fin1">First Name:</label>
      <input required className='form-control' type="text" name="form_fname" value={form_dat[0]} 
      onChange={(event)=>{handleChange(event,0)}} id="fin1" />
      <label className='form-label fs-5 pt-1 ps-1' htmlFor="fin2">Last Name:</label>
      <input required className='form-control' type="text" name="form_lname" value={form_dat[1]} 
      onChange={(event)=>{handleChange(event,1)}} id="fin2" />
      <label className='form-label fs-5 pt-1 ps-1' htmlFor="fin3">Email:</label>
      <input required className='form-control' type="text" name="form_email" value={form_dat[2]} 
      onChange={(event)=>{handleChange(event,2)}} id="fin3" />
      <div className="row justify-content-center py-2">
                <div className="col-auto">
                    <button className="btn btn-success">Submit</button>
                </div>
            </div>
      </form>
    </div>
  )
}

export default UpdateEmployee