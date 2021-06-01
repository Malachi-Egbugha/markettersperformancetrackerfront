import React from "react";
import { Link,RouteComponentProps, withRouter} from "react-router-dom";
import {signout} from "../Api/apicall";
import { History } from 'history';
interface IProps extends RouteComponentProps{
    history: History;
    // any other props that come into the component
}
const Navbar1 = ({ history }: IProps) => {
  const toggleSidebar = async () => {
    //define central store nd access redux
    var sidebar:any = document.getElementById("sidebar");
    sidebar.classList.add("sidebar_responsive");
  };
 const signoutnow =async() => {
   await signout();
   history.push("/")
  };
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={toggleSidebar}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar__left">
     
           
        <span
            onClick={() => signoutnow()}
            className="nav-link"
            style={{ cursor: "pointer", color: "red" }}
          >
            <i className="fa fa-power-off"></i>
            Log out
          </span>
        
      
       
      </div>
      <div>
         <h2 className="font-bold" >MARKETERS PERFORMANCE TRACKER</h2>
      </div>
      <div className="navbar__right">
    
        <Link to="#">
          <i className="fa fa-search"></i>
        </Link>
        <Link to="#">
          <i className="fa fa-clock-o"></i>
        </Link>
        <Link to="#">
         
        </Link>
      </div>
    </nav>
  );
};

export default withRouter(Navbar1);
