import React, { useState, useEffect } from "react";
import Layouttwo from "../../Layout/Layertwo";
import Chart from '../../Component/Chart';

const Dashboard = () => {
  
  return (
    <Layouttwo>
      <div className="main__container">
        <div className="main__title">
          <img src="assets/banner.jpg" alt="" />
          <div className="main__greeting">
            <h1 className="text-primary-p">DASHBOARD</h1>
       
          </div>
        </div>

        <hr className="main__cards" />
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1 className="text-title">District Performance Details</h1>
              </div>
            </div>
            <div id="apex1">
              <Chart labels={['Billing', 'supply', 'PPM', 'Payment', 'Hazard', 'Others']} data={[6145, 5653, 7898, 8903, 8908, 6457,] }/>
            </div>
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1 className="text-title">Summary Data</h1>
              </div>
            </div>
            <div className="charts__right__cards">
              
              <div className="card1">
                <h1 className="text-lightblue">Total Number of Records</h1>
                <p>678</p>
                </div>
                

              <div className="card2">
                <h1 className="text-lightblue">Total Number of Marketters</h1>
                <p>14</p>
              </div>
              

              <div className="card3">
                <h1  className="text-lightblue">Total Number of Feeders</h1>
                <p>14</p>
              </div>

              <div className="card4">
                <h1  className="text-lightblue">Total Number of Transformers</h1>
                <p>0</p>
              </div>
            </div>
          </div>
              </div>
             
               
              
      </div>
    </Layouttwo>
  );
};
export default Dashboard;
