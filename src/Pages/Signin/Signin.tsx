import { Redirect } from "react-router-dom";
import Layoutone from "../../Layout/Layoutone";
//import { GoogleLogin } from 'react-google-login';
import React, { useState } from "react";
import { authenticate } from "../../auth";
import { signin } from '../../Api/apicall';
import "./Signin.css";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });
  const {
    email,
    password,
    error,
    loading,
    redirectToReferrer,
  } = values;

  //handle change input
  const handleChange = (name:string) => (event:React.ChangeEvent<any>) => {
    setValues({ ...values, error: "", [name]: event.target.value });
  };
   //handle form submission
  const clickSubmit = async (event: React.ChangeEvent<any>) => {
    console.log(error);
    event.preventDefault();
    //set loading to true
    setValues({ ...values, error: "", loading: true });
    //access sign in api
    let signdata = await signin({ email, password });
    if (signdata.error) {
      setValues({ ...values, error: signdata.error, loading: false });
    } else {
      authenticate(signdata, () => {
        setValues({ ...values, redirectToReferrer: true });
      });
    }
  };

 
  
/*
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [token, setToken] = useState("");

  
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
        <label className="text-mute text-primary-p">Email:</label>
        <input
          value={email}
          onChange={handleChange("email")}
          type="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-mute text-primary-p">Password:</label>
        <input
          onChange={handleChange("password")}
          value={password}
          type="password"
          className="form-control"
        />
      </div>
      <button
        type="submit"
         onClick={clickSubmit}
        className="btn btn-primary"
        style={{ backgroundColor: "#265acc" }}
      >
        Submit
      </button>
      
    </form>
  );
   //show loading
  const showLoading = () =>
    loading && (
      <div className="spinning">
        <div></div>
        <div></div>
      </div>
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
  // redirect user to dashboard if referer is true
  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to="/dashboard" />;
    }
  };
  return (
    <Layoutone className="outerdiv">
      <div className="loginbanner">
        <div className="card">
          <div className="card-header" style={{ backgroundColor: "#265acc" }}>
            Login
          </div>
          <div className="card-body">
            {showError()}
            {showLoading()}
            {redirectUser()}
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
