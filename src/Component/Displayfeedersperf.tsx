import React,{useState,useEffect,Fragment} from 'react'
import Modal from "react-modal";
import Search from "./Search";
type Props = {
    info: any;
    modalIsOpen: any;
    setModalIsOpen: any;
    intype : string;


}
const Displayfeedersperf = ({ info,modalIsOpen,
  setModalIsOpen, intype }: Props) => {
  
  Modal.setAppElement("#root");


  let [values, setValues] = useState<any[]>([]);
  const [searchterm, setSearchterm] = useState<string>("");
 //search data method
  const searchmethod = (event: any) => {
    setSearchterm(event.target.value);
 }
  let gt = () =>
    setValues(info);
 

  useEffect(() => {
    gt();
  }, [info]);
  //console.log(edituserinfo.users[0].firstname);

  
  
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "#000000",
          },
          content: {
            color: "#000000",
          },
        }}
      >
        <Fragment >
          
          <h2 className="font-bold">{ `PERFORMANCE BY ${intype}`}</h2>
        <Search searchmethod={searchmethod} placeholder="...Search"/>
      <table className="table" >
        <thead>
              <tr>
                <th scope="col">S/N</th>
    
                <th scope="col">{intype}</th>
                <th scope="col">Total Billed POP</th>
                  <th scope="col">Toat Paid POP</th>
                <th scope="col">CC</th>
                  <th scope="col">Total Billed Amount</th>
                  <th scope="col">Toat Paid Amount</th>
                <th  scope="col">CE</th>
          
           
            
          </tr>
        </thead>
        <tbody>
              {values.filter((val) => {
                console.log(typeof val._id);
              if (searchterm === "")
              {
                return val;
                }
                 else if (typeof(val._id) === 'string'  && val._id.toLowerCase().includes(searchterm.toLowerCase())  ) {
                  return val;
                }
           }).map((u:any, i:number) => (
            <tr key={i}>
               <td>{i + 1}</td>
               <td>{u._id}</td>
               <td>{u.totalbilledpop}</td>
               <td>{u.totalpaidpop}</td>
               <td>
                 
                 {Math.round(u.totalpaidpop/u.totalbilledpop * 100) + '%'}
                 
               </td>
               <td>{u.totalbilledamt.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
               <td>{u.totalpaidamt.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
               <td>
                 
                 {Math.round(u.totalpaidamt/u.totalbilledamt * 100) + '%'}
                 
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
         
            <button
            className="btn btn-danger"
          onClick={() => { setSearchterm(""); return ( setModalIsOpen(false)) }}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
      </Modal>
    </div>
  );
};

export default Displayfeedersperf;
