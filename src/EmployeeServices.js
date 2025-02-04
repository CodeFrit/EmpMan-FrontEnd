import axios from "axios"
const BASE_URL = "http://localhost/api/emp";

export const listemps = () => {
   return axios.get(BASE_URL+"/showall");
}

export const updateEmp = (id,inp) => {
   return axios.put(BASE_URL+"/update/"+id,{
      "fname":inp.form_fname,
      "lname":inp.form_lname,
      "email":inp.form_email
  });
}

export const getemp = (id) => {
   return axios.get(BASE_URL+"/show/"+id);
}

export const delemp = (id) => {
   return axios.delete(BASE_URL+"/delete/"+id);
}

export const queryemp = (ex) => {
   return axios.get(BASE_URL+"/query/"+ex);
}