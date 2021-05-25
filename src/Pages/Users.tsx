
import React, { useState, useEffect } from "react";
import Layouttwo from "../Layout/Layertwo";
import { adduser,fetchusers,updateUser } from "../Api/apicall";
import Showsuccess from "../Component/Showsuccess";
import Displayusers from "../Component/Displayusers";

const Users = () => {
   const [displayusers, setdisplayusers] = useState([]);
  const loadUsers = () => {
    fetchusers().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setdisplayusers(data.users);
      }
    });
  };
  useEffect(() => {
    loadUsers();
  }, []);

 const changeStatus = async (event:any) => {
   let status;
  
  let id = event.target.value;
   if (event.target.innerText === "Deactivate") {
     (status = "deactive");
     let updatestatus = await updateUser(id, { status });
     updatestatus.error
      ?  setValues({ ...values,createUser:"", error: updatestatus.error})
      :  setValues({ ...values, error:"",createUser:"Status Changed" });
     
   }
   else if(event.target.innerText === "Activate"){
     (status = "active");
     let updatestatus = await updateUser(id, { status });
     updatestatus.error
      ?  setValues({ ...values,createUser:"", error: updatestatus.error})
      :  setValues({ ...values, error:"",createUser:"Status Changed" });
   }
   else if (event.target.innerText === "Reset") {
     
     let updatestatus = await updateUser(id, { password });
     updatestatus.error
      ?  setValues({ ...values,createUser:"", error: updatestatus.error})
      :  setValues({ ...values, error:"",createUser:"Password has been reset" });
     
   }
      
    loadUsers();
  };
const [currentPage, setCurrentPage] = useState<number>(1);
const [postsPerpage] = useState<number>(3);

   const [values, setValues] = useState({
    email: "",
    password: "eedc01",
     error: "",
    createUser:"",
  
  });
  const {
    email,
    password,
    error,
    createUser,
    
  } = values;
  //handle change input
  const handleChange = (name:string) => (event:React.ChangeEvent<any>) => {
    setValues({ ...values, error: "", createUser: "", [name]: event.target.value });
    loadUsers();
  };
   //handle form submission
   
  const clickSubmit = async (event: React.ChangeEvent<any>) => {
    //console.log(error);
    event.preventDefault();
    //set error empty
    setValues({ ...values, error: "" });
    //access sign in api
    let adduserdata = await adduser({ email, password });
    if (adduserdata.error) {
      setValues({ ...values,createUser:"", error: adduserdata.error});
       } 
    else
    {
    
        setValues({ ...values, error:"",createUser:"Email created" });
     
    }
    loadUsers();
  };
 
const adduserform = () => (
   <form>
        <div className="form-group">
          <input
        value={email}
        onChange={handleChange("email")}
            type="email"
            className="form-control"
          />
         
    </div>
     <button
        type="submit"
         onClick={clickSubmit}
        className="btn btn-primary btn-block mt-4"
        
      >
        Submit
      </button>
        
   
      </form>
    
);
//error div
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
  
  return (
    <Layouttwo>
      <div className="main__container">
        <div className="main__title">
          <img src="assets/banner.jpg" alt="" />
          <div className="main__greeting">
            <h1 className="text-primary-p">Add Users</h1>
       
          </div>
        </div>

        <hr className="main__cards" />
          <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1 className="text-title">Add a User Email</h1>
              </div>
            </div>
            <div id="apex1">
              {showError()}
              <Showsuccess createUser={createUser} />
           {adduserform()}
              
            </div>
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1 className="text-title">Manage Users</h1>
              </div>
            </div>
           
              
            <Displayusers displayusers={displayusers} changeStatus={changeStatus} />
           
          </div>
              </div>
           
       
      </div>
    </Layouttwo>
  );
};
export default Users;
