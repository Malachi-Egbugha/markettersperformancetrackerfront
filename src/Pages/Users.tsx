
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Layouttwo from "../Layout/Layertwo";
import { adduser,fetchusers,updateUser,finduser, signout } from "../Api/apicall";
import Showsuccess from "../Component/Showsuccess";
import Displayusers from "../Component/Displayusers";
import Userform from "../Component/Userform";
import Pagination from "../Component/Pagination";
import Editpassword from "../Component/Editpassword";
import Editemail from "../Component/Editemail";

const Users = () => {
  const [modalPasswordIsOpen, setModalPasswordIsOpen] = useState(false);
   const [modalEmailIsOpen, setModalEmailIsOpen] = useState(false);
  const [edituserinfo, setEditUserInfo] = useState({
    usertype: "",
    status: "",
    _id: "",
    email: "",
  });
  const [displayusers, setdisplayusers] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerpage] = useState<number>(1);
  //Get current posts
  const indexOfLastPost = currentPage * postsPerpage;
  const indexOfFirstPost = indexOfLastPost - postsPerpage;
  const currentUsers = displayusers.slice(indexOfFirstPost, indexOfLastPost);
   const [values, setValues] = useState({
    email: "",
    password: "eedc01",//setdefault password
     error: "",
    createUser:"",
  
  });
  const {
    email,
    password,
    error,
    createUser,
    
  } = values;
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
  const changeaccessStatus = async (key: any, usertype: any) => {
    
    let updatestatus = await updateUser(key, { usertype });
    updatestatus.error
      ?  setValues({ ...values,createUser:"", error: updatestatus.error})
      : setValues({ ...values, error: "", createUser: "Access Type Changed" });
    loadUsers();
   
    
  }
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
 

//error div
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
  const paginate = (pageNumber:number) => {
    //setInfo("");
    setCurrentPage(pageNumber);
  };
   const changeModalstate = async (event:any) => {
     let { value } = event.currentTarget;
     //find user
     
     
     
     let edituser = await finduser(value);
     
    if (edituser.error) {
       setValues({ ...values,createUser:"", error: edituser.error});
    } else {
      setEditUserInfo({ ...edituser.users[0] });
      setModalPasswordIsOpen(true);
    }
    
  };
   const changeModalemail = async (event:any) => {
     let { value } = event.currentTarget;
     //find user
     
     
     
     let edituser = await finduser(value);
     
    if (edituser.error) {
       setValues({ ...values,createUser:"", error: edituser.error});
    } else {
      setEditUserInfo({ ...edituser.users[0] });
      setModalEmailIsOpen(true);
    }
    
  };
    let history = useHistory();
 const signoutnow =async() => {
   await signout();
   history.push("/")
  };
  const fetchstatus = (info:any) => {
    info.error
      ?  setValues({ ...values,createUser:"", error: info.error})
      :setValues({ ...values, error:"",createUser:"Password  Updated" });
    setModalPasswordIsOpen(false);
    signoutnow();
  };
   const fetchemailstatus = (info:any) => {
    info.error
      ?  setValues({ ...values,createUser:"", error: info.error})
      :setValues({ ...values, error:"",createUser:"Email  Updated" });
     setModalEmailIsOpen(false);
     loadUsers();
    
  };
 
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
              <Userform email={email} handleChange={handleChange} clickSubmit={clickSubmit} changeModalstate={ changeModalstate}/>
              <Editpassword modalPasswordIsOpen={modalPasswordIsOpen}
                setModalPasswordIsOpen={setModalPasswordIsOpen}
                edituserinfo={edituserinfo}
                fetchstatus={fetchstatus} />
               <Editemail modalEmailIsOpen={modalEmailIsOpen}
                setModalEmailIsOpen={setModalEmailIsOpen}
                edituserinfo={edituserinfo}
                fetchemailstatus={ fetchemailstatus}/>
            </div>
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1 className="text-title">Manage Users</h1>
                
              </div>
            </div>
           
              
            <Displayusers changeaccessStatus={changeaccessStatus} displayusers={currentUsers} changeStatus={changeStatus} indexOfFirstPost={indexOfFirstPost} changeModalemail={changeModalemail}  />
             <Pagination postsPerpage={postsPerpage} totalPost={displayusers.length} paginate={paginate} currentPage={currentPage} />
          </div>
              </div>
           
       
      </div>
    </Layouttwo>
  );
};
export default Users;
