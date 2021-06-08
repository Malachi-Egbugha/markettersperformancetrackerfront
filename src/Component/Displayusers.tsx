import { Fragment } from 'react';
import React, { useState } from "react";
import { isSuperadmin } from "../auth";
type Props = {
  displayusers: any;
  changeStatus: any;
  indexOfFirstPost: number;
  changeModalemail: any;
  changeaccessStatus: any;
}

const Displayusers = ({ displayusers,changeStatus,changeaccessStatus,indexOfFirstPost,changeModalemail }:Props) => {
 const [values, setValues] = useState({
      error: "",
    createUser:"",
   usertype: "",
   
  
  });
  //handle change input
  const handleChange = (name: string) => (event: React.ChangeEvent<any>) => {
    const target = event.target as HTMLSelectElement;
   const key = target.getAttribute('datatype');
    setValues({ ...values, error: "", createUser: "", [name]: event.target.value });
    changeaccessStatus(key, event.target.value);
     
    
    //loadUsers();
  };
  return (
    <Fragment >
  
 
      <table className="table" >
        <thead>
          <tr>
            <th  scope="col"></th>
            
            <th  scope="col">Email</th>
         
            <th  scope="col">Update Status</th>
          
            <th scope="col">ResetPassword</th>
            <th scope="col">Change Email</th>
            <th scope="col">Change Access Type</th>
            <th  scope="col">Access Type</th>
            
          </tr>
        </thead>
        <tbody>
           {displayusers.map((u:any, i:number) => (
            <tr key={i} >
               <td>{indexOfFirstPost=indexOfFirstPost + 1}</td>
               <td>{u.email}</td>
               <td>
                 <button
                  style={isSuperadmin()?{display:''}:{display:'none'}}
                onClick={changeStatus}
                  value={u._id}
                  type="button"
                  className={
                    u.status === "active" ? "btn btn-danger" : "btn btn-success"
                  }
                >
                  {u.status === "active" ? "Deactivate" : "Activate"}
                </button>
               </td>
              
               <td>
                 <button
                   style={isSuperadmin()?{display:''}:{display:'none'}}
                  onClick={changeStatus}
                  value={u._id}
                  type="button"
                  className=
                     "btn btn-success"
                  
                >
                  Reset
                </button>
                 
                 
               </td>
                <td>
                 <button
                   style={isSuperadmin()?{display:''}:{display:'none'}}
                    onClick={changeModalemail}
                  value={u._id}
                  type="button"
                  className=
                     "btn btn-dark"
                  
                >
                  <i className="fas fa-users-cog"></i>
                </button>
                 
                 
               </td>
               <td style={isSuperadmin()?{display:''}:{display:'none'}}>
                   <form>
                      <div className="form-group">
                     <select
                       datatype={u._id}
                       onChange={handleChange("usertype")}
                       className="form-control"
                       required
                       >
                       <option>Please Select</option>
                       <option  value="superadmin">Super Admin</option>
                       <option value="admin">Admin</option>
                       <option value="management">Management</option>
                     </select>
                     <input value={u._id} type="hidden"/>
                   </div>
                   </form>
                 
               </td>
               <td>{ u.usertype}</td>
               
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
export default Displayusers;
