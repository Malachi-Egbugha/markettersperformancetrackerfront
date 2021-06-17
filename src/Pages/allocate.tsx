import Layouttwo from "../Layout/Layertwo";
import React, { useState, useEffect } from 'react';
import FileUpload from "../Component/Fileupload";
import { stats } from '../Api/apicall';
import Message from '../Component/Message';
import Manualupload from '../Component/Manualupload';
import { manualsignup } from '../Api/apicall';

const Allocate = () => {
  const [statistics, setStatistics] = useState({
    Districtstats:[],
    Tranformerstats:[],
    Feederstats: [],
 
    
  });
  const [message, setMessage] = useState('');
  const [values, setValues] = useState({
  
         MARKETER_NAME:"",
         STAFF_ID:"",
         marketer_phone:"",
         bill_type:"",
         arrears:"",
         paid_amt:"",
         billed_amt:"",
         paid_pop:"",
         billed_pop:"",
         transformer_code:"",
         transformer:"",
         feeder_code:"",
         feeder:"",
         district:"",
         cust_category:"",
        connectiontype: "",
       
   

  });
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

  const handleChange = (name:any) => (event:any) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
    
  };
  const clickSubmit = (event:any) => {
    event.preventDefault();
    manualsignup({ ...values }).then((data) => {
      if (data.error) {
        setMessage(data.error);
      } else {
        setValues({
          ...values,
        MARKETER_NAME:"",
         STAFF_ID:"",
         marketer_phone:"",
         arrears:"",
         paid_amt:"",
         billed_amt:"",
         paid_pop:"",
         billed_pop:"",
      
        });
        
        setMessage("Record created successfully");
      }
    });
    
  };

  
  return (
    <Layouttwo>
      <div className="main__container">
     
       
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
                 {message ? <Message msg={message}/> :null}
                
              </div>
            </div>
 
              
          <Manualupload Tranformerstats={Tranformerstats} Feederstats={Feederstats} Districtstats={Districtstats} handleChange={handleChange} values={values} clickSubmit={clickSubmit} />
              
            
          </div>
              </div>
           
               
      </div>
    </Layouttwo>
  );
};
export default Allocate;
