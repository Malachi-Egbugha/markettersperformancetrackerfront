import React,{useState, useEffect} from 'react'
import Layouttwo from "../Layout/Layertwo";
import Chart from '../Component/Chart';
import { stats } from '../Api/apicall';
import Displayfeedersperf from '../Component/Displayfeedersperf'

const Dashboard = () => {


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [settervar, setSettervar] = useState<any[]>([]);
    const [intype, setIntype] = useState<any>("");
  
  const [statistics, setStatistics] = useState({
    totalPerformance: "",
    totalTransformers: "",
    totalMarketters: "",
    totalFeeders: "",
    totalDistricts: "",
    Districtstats:[],
    Tranformerstats:[],
    Feederstats: [],
    Totalpaidpop: "",
    Totalbillpop: "",
    Totalbillamt: 0,
    Totalpaidamt:0,
  });
  const { totalPerformance,
    totalTransformers,
    totalMarketters,
    totalFeeders,
    totalDistricts,
    Districtstats,
    Tranformerstats,
    Feederstats,
    Totalpaidpop,Totalbillpop,Totalbillamt,Totalpaidamt} = statistics;
  const [error, setError] = useState<string>('');
 
  //load statistics
  const loadStatistics = async () => {
    let getstats = await stats();
    getstats.error ? setError(getstats.error)
      : setStatistics({
        ...statistics, totalPerformance: getstats.totalPerformance,
        totalTransformers: getstats.totalTransformers,
        totalMarketters: getstats.totalMarketters,
        totalFeeders: getstats.totalFeeders,
        totalDistricts: getstats.totalDistricts,
        Feederstats: getstats.Feederstats,
        Districtstats:getstats.Districtstats,
        Tranformerstats: getstats.Tranformerstats,
        Totalpaidpop: getstats.Totalstats[0].totalpaidpop + getstats.Totalstats[1].totalpaidpop,
        Totalbillpop:getstats.Totalstats[0].totalbilledpop + getstats.Totalstats[1].totalbilledpop,
        Totalbillamt: Number(getstats.Totalstats[0].totalbilledamt) + Number(getstats.Totalstats[1].totalbilledamt),
        Totalpaidamt: Number(getstats.Totalstats[0].totalpaidamt) + Number(getstats.Totalstats[1].totalpaidamt),
      });
      
  };
  const setinfo = (setter: any, typedata:string) => {
    
    setSettervar(setter);
    setIntype(typedata);
    setModalIsOpen(true)
  }
     

  useEffect(() => {
    loadStatistics();
   
  },[]);
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
                <h1 className="text-title">Summary</h1>
              </div>
            </div>
            
            <div id="apex1">
               <div className="card4" style={{padding: "2px",backgroundColor:"#fff"}}>
                <h1 className="text-lightblue">Total Billed Amount</h1>
                <p>{Totalbillamt.toFixed(2) }</p>
              </div>
             
               <div className="card4" style={{padding: "2px",backgroundColor:"#fff"}}>
                <h1 className="text-lightblue">Total Billed PoP</h1>
                <p>{Totalbillpop }</p>
              </div>
               <div className="card4" style={{padding: "2px",backgroundColor:"#fff"}}>
                <h1 className="text-lightblue">Total Paid Pop</h1>
                <p>{Totalpaidpop }</p>
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
            
              <div className="card1">
                <h1 className="text-lightblue">Total Number of Records</h1>
                <p>{totalPerformance }</p>
                </div>
              
              
               
   
<button onClick={() => setinfo(Districtstats,"DISTRICTS")}>
              <div className="card2">
                <h1 className="text-lightblue">Total Number of Districts</h1>
                <p>{ totalDistricts}</p>
                </div>
                </button>
              
             <button onClick={() => setinfo(Feederstats, "FEEDERS")}>
              <div className="card3">
                <h1  className="text-lightblue">Total Number of Feeders</h1>
                <p>{ totalFeeders}</p>
                </div>
              </button>
             
       
     
            <button onClick={() => setinfo(Tranformerstats,"TRANSFORMERS")}>
              <div className="card4">
                <h1  className="text-lightblue">Total Number of Transformers</h1>
                <p>{ totalTransformers}</p>
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
