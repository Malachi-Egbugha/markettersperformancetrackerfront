import React, { useState, useEffect } from 'react';
import Layouttwo from "../Layout/Layertwo";
import { stats } from '../Api/apicall';
import Displayfeedersperf from '../Component/Displayfeedersperf'

const Dashboard = () => {


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [settervar, setSettervar] = useState<any[]>([]);
    const [intype, setIntype] = useState<any>("");
  
  const [statistics, setStatistics] = useState({
    totalMarketters: "",
    totalTransformers: "",
    totalFeeders: "",
    totalDistricts: "",
    Districtstats:[],
    Tranformerstats:[],
    Feederstats: [],
    Marketterstats:[],
    Totalpaidpop: "",
    Totalbillpop: "",
    Totalbillamt: 0,

  });
  const { totalMarketters,
    totalTransformers,
    totalFeeders,
    totalDistricts,
    Districtstats,
    Tranformerstats,
    Feederstats,
    Marketterstats,
    Totalpaidpop,Totalbillpop,Totalbillamt} = statistics;
  const [error, setError] = useState<string>('');
 
  //load statistics
  const loadStatistics = async () => {
    let getstats = await stats();
    getstats.error ? setError(getstats.error)
      : setStatistics({
        ...statistics, totalMarketters: getstats.totalMarketters,
        totalTransformers: getstats.totalTransformers,
        totalFeeders: getstats.totalFeeders,
        totalDistricts: getstats.totalDistricts,
        Feederstats: getstats.Feederstats,
        Districtstats: getstats.Districtstats,
        Marketterstats:getstats.Marketterstats,
        Tranformerstats: getstats.Tranformerstats,
        Totalpaidpop: getstats.Totalstats[0].totalpaidpop + getstats.Totalstats[1].totalpaidpop,
        Totalbillpop:getstats.Totalstats[0].totalbilledpop + getstats.Totalstats[1].totalbilledpop,
        Totalbillamt: Number(getstats.Totalstats[0].totalbilledamt) + Number(getstats.Totalstats[1].totalbilledamt),
       
      });

      
  };
  const setinfo = (setter: any, typedata:string) => {
    
    setSettervar(setter);
    setIntype(typedata);
    setModalIsOpen(true)
  }
     

  useEffect(() => {
    loadStatistics();
   
  }, []);
  //error div
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
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
        {showError()}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1 className="text-title">Summary</h1>
              </div>
            </div>
            
            <div id="apex1">
               <div className="card4" style={{padding: "2px",backgroundColor:"#fff"}}>
                <h1 className="text-lightblue">Total Billed Amount</h1>
            
                <p>{Totalbillamt.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }</p>
              </div>
             
               <div className="card4" style={{padding: "2px",backgroundColor:"#fff"}}>
                <h1 className="text-lightblue">Total Billed PoP</h1>
                <p>{Totalbillpop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }</p>
              </div>
               <div className="card4" style={{padding: "2px",backgroundColor:"#fff"}}>
                <h1 className="text-lightblue">Total Paid Pop</h1>
                <p>{Totalpaidpop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }</p>
                </div>
             
           
            </div>
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1 className="text-title">Summary Data</h1>
              </div>
            </div>
            <div className="charts__right__cards">
              <button onClick={() => setinfo(Marketterstats,"Marketers")}>
            
              <div className="card1">
                <h1 className="text-lightblue">Total Number of MARKETERS</h1>
                <p>{totalMarketters.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }</p>
              </div>
              
              </button>
              
               
   
<button onClick={() => setinfo(Districtstats,"DISTRICTS")}>
              <div className="card2">
                <h1 className="text-lightblue">Total Number of Districts</h1>
                <p>{ totalDistricts.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                </div>
                </button>
              
             <button onClick={() => setinfo(Feederstats, "FEEDERS")}>
              <div className="card3">
                <h1  className="text-lightblue">Total Number of Feeders</h1>
                <p>{ totalFeeders.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                </div>
              </button>
             
       
     
            <button onClick={() => setinfo(Tranformerstats,"TRANSFORMERS")}>
              <div className="card4">
                <h1  className="text-lightblue">Total Number of Transformers</h1>
                <p>{ totalTransformers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                </div>
                </button>
            </div>
          </div>
              </div>
             
                <Displayfeedersperf
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
          info={settervar}
          intype={intype}
       
      />
              
      </div>
    </Layouttwo>
  );
};
export default Dashboard;
