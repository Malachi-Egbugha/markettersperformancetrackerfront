import React,{useState,useEffect,Fragment} from 'react'
import Modal from "react-modal";

type Props = {
    info: any;
    modalIsOpen: any;
    setModalIsOpen: any;
    intype : string;


}
const Displayfeedersperf = ({ info,modalIsOpen,
  setModalIsOpen,intype }:Props) => {
  Modal.setAppElement("#root");


  let [values, setValues] = useState<any[]>([]);
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
  
      <table className="table" >
        <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col"></th>
                 <th  scope="col"></th>
                <th scope="col">{intype}</th>
            <th  scope="col">PERFORMANCE</th>
          
           
            
          </tr>
        </thead>
        <tbody>
           {values.map((u:any, i:number) => (
            <tr key={i}>
               <td>{i + 1}</td>
               <td></td>
               <td></td>
               <td>{u._id}</td>
              
              
               <td>
                 
                 {Math.ceil(u.totalpaidpop/u.totalbilledpop * 100) + '%'}
                 
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
         
            <button
            className="btn btn-danger"
            onClick={() => setModalIsOpen(false)}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
      </Modal>
    </div>
  );
};

export default Displayfeedersperf;
