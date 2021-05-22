import { Redirect } from "react-router-dom";
import Layoutone from "../../Layout/Layoutone";
//import { GoogleLogin } from 'react-google-login';
import React, { useState } from "react";
import { login } from '../../Api/apicall';
import "./Signin.css";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [token, setToken] = useState("");

  /*
  const responseGoogle = async (response) => {
  
  await  setName(response.profileObj.name);
  await setEmail(response.profileObj.email);
  await setUrl(response.profileObj.imageUrl);
  await setToken(response.tokenObj.id_token);
  let data = { name, email, imageUrl, token };
    //console.log(response);  
    console.log(await login(data));
  
}
*/

 
  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-mute">Email:</label>
        <input
          value=""
          
          type="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-mute">Password:</label>
        <input
          value=""
         
          type="password"
          className="form-control"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ backgroundColor: "#080A22" }}
      >
        Submit
      </button>
      
    </form>
  );
  

  return (
    <Layoutone className="outerdiv">
      <div className="loginbanner">
        <div className="card">
          <div className="card-header" style={{ backgroundColor: "#080A22" }}>
            Login
          </div>
          <div className="card-body">
           
            {signUpForm()}
            {
              /*
              <GoogleLogin
                clientId="1045668157554-ts7mnbvqau4k4180dti37g967d0sf289.apps.googleusercontent.com"
                buttonText="login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            */
            }
             
          </div>
        </div>
      </div>
    </Layoutone>
  );
};

export default Signin;
