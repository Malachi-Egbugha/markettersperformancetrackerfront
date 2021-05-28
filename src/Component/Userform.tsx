import React,{Fragment} from 'react';
type Props = {
    email: any;
    handleChange: any;
  clickSubmit: any;
  changeModalstate: any;
    
}
const {user} =JSON.parse(localStorage.getItem("usersign") || '{}') 
const Userform = ({ email, handleChange, clickSubmit,changeModalstate }:Props) => {
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
    return (
        <Fragment>
        {adduserform()}
        <button
          type="button"
          value={user._id }
       onClick={changeModalstate}
        className="btn btn-dark btn-block mt-4"
        
      >
        Change Password
      </button>

        </Fragment>

    )
    
}

export default Userform;

