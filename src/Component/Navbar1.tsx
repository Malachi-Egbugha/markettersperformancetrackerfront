import React from "react";
import { Link,RouteComponentProps, withRouter } from "react-router-dom";
import { isActive } from "../auth";
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

  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={toggleSidebar}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar__left">
        <Link to="/">DASHBOARD</Link>
           
        
        
      
       
      </div>
      <div>
         <h2 className="font-bold" >MARKETTERS PERFORMANCE TRACKER</h2>
      </div>
      <div className="navbar__right">
    
        <Link to="#">
          <i className="fa fa-search"></i>
        </Link>
        <Link to="#">
          <i className="fa fa-clock-o"></i>
        </Link>
        <Link to="#">
          <img width="30" src="assets/necco.png" alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default withRouter(Navbar1);
