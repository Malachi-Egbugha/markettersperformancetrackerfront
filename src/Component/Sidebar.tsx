import React from "react";
import { Link, useHistory } from "react-router-dom";
import { isActive } from "../auth";
import logo from "../assets/images/logo.png";

const Sidebar = () => {
  let history = useHistory();
  const closeSidebar = async () => {
    //define central store nd access redux
    const  sidebar:any= document.getElementById("sidebar");
    sidebar.classList.remove("sidebar_responsive");
  };
 
  return (
    <div id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img"></div>
        <i className="fa fa-times" id="sidebarIcon" onClick={closeSidebar}></i>
      </div>
      <div style={{ display: "flex",backgroundColor:"#ffffff",  justifyContent: "center" }}>
        <img
          style={{ width: "100px", borderRadius: "30%", background: "#fff", marginBottom: "50px",marginTop: "30px" }}
          src={logo}
          alt=""
        />
      </div>

      <div className="sidebar__menu">
        <div
          className={
            isActive(history, "/dashboard")
              ? "sidebar__link active_menu_link"
              : "sidebar__link"
          }
        >
          <i className="fa fa-home"></i>
          <Link to="/dashboard">Dashboard</Link>
        </div>
{/**this handles the account management section including profile */}
        <h2>ALLOCATION</h2>
        <div
          className={
            isActive(history, "/allocate")
              ? "sidebar__link active_menu_link"
              : "sidebar__link"
          }
        >
         <i className="fab fa-acquisitions-incorporated"></i>

          <Link to="/allocate">Allocate Marketters</Link>
              </div>
              
              {/**this section handles routing for Complain management*/}
            
            
       
        <div
          className={
            isActive(history, "/manageallocations")
              ? "sidebar__link active_menu_link"
              : "sidebar__link"
          }
        >
   <i className="fas fa-bullseye"></i>

          <Link to="/manageallocations">Manage Allocations</Link>
              </div>
                {/**this section handles routing for Users*/}
                <h2>Manage Users</h2>
       
              
            
            
            
       
        <div
          className={
            isActive(history, "/users")
              ? "sidebar__link active_menu_link"
              : "sidebar__link"
          }
        >
        <i className="fa fa-handshake-o"></i>

          <Link to="/users">Manage Users</Link>
              </div>
              
              
</div>
    </div>
  );
};
export default Sidebar;

