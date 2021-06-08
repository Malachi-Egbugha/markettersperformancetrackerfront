import Layouttwo from "../Layout/Layertwo";
import React, { useState, useEffect } from 'react';
import FileUpload from "../Component/Fileupload";
import { stats } from '../Api/apicall';
import Message from '../Component/Message';
import Manualupload from '../Component/Manualupload';

const Allocate = () => {
  const [statistics, setStatistics] = useState({
    Districtstats:[],
    Tranformerstats:[],
    Feederstats: [],
 
    
  });
  const [message, setMessage] = useState('');
  const { 
    Districtstats,
    Tranformerstats,
    Feederstats,
    
  } = statistics;
  //load statistics
  const loadStatistics = async () => {
    let getstats = await stats();
    getstats.error ? setMessage(getstats.error)
      : setStatistics({
        ...statistics, 
        Feederstats: getstats.Feederstats,
        Districtstats: getstats.Districtstats,
        Tranformerstats: getstats.Tranformerstats,
        
      });

      
  };
  useEffect(() => {
    loadStatistics();
   
  }, []);
  
  return (
    <Layouttwo>
      <div className="main__container">
     
        {message ? <Message msg={message}/> :null}
        <div className="main__title">
      
          <img src="assets/banner.jpg" alt="" />
          <div className="main__greeting">
            <h1 className="text-primary-p">Profile</h1>
       
          </div>
        </div>

        <hr className="main__cards" />

       <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1 className="text-title">Upload Your Excel Sheet</h1>
              </div>
            </div>
            <div id="apex1">
              <FileUpload/>
              
            </div>
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1 className="text-title">Allocate Manually</h1>
                
              </div>
            </div>
 
              
          <Manualupload Tranformerstats={Tranformerstats} Feederstats={Feederstats} Districtstats={Districtstats}  />
              
            
          </div>
              </div>
           
               
      </div>
    </Layouttwo>
  );
};
export default Allocate;
