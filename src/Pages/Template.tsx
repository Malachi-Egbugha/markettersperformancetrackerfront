import React, { useState, useEffect } from "react";
import Layouttwo from "../Layout/Layertwo";

const Dashboard = () => {
  
  return (
    <Layouttwo>
      <div className="main__container">
        <div className="main__title">
          <img src="assets/banner.jpg" alt="" />
          <div className="main__greeting">
            <h1>DASHBOARD</h1>
       
          </div>
        </div>

        <hr className="main__cards" />
       
      </div>
    </Layouttwo>
  );
};
export default Dashboard;
