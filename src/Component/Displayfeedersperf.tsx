import React, { useState, useEffect, Fragment } from 'react'
import Modal from "react-modal";
import Search from "./Search";
import Pagination from '../Component/Pagination';
type Props = {
  info: any;
  modalIsOpen: any;
  setModalIsOpen: any;
  intype: string;


}
const Displayfeedersperf = ({ info, modalIsOpen,
  setModalIsOpen, intype }: Props) => {
  

  Modal.setAppElement("#root");


  let [values, setValues] = useState<any[]>([]);
  const [searchterm, setSearchterm] = useState<string>("");
   const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerpage] = useState<number>(300);
  //Get current posts
  const indexOfLastPost:number = currentPage * postsPerpage;
  let indexOfFirstPost:number = indexOfLastPost - postsPerpage;
  //search data method
  const searchmethod = (event: any) => {
    setSearchterm(event.target.value);
  }
  let gt = () =>
    setValues(info);
  const paginate = (pageNumber:number) => {
    //setInfo("");
    setCurrentPage(pageNumber);
  };


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

          <button
          className="btn btn-danger"
          onClick={() => { setSearchterm(""); return (setModalIsOpen(false)) }}
          style={{ marginLeft: "10px" }}
        >
          Back
          </button>
          <h2 className="font-bold">{`PERFORMANCE BY ${intype}`}</h2>
          <Search searchmethod={searchmethod} placeholder="...Search" />
          <table className="table" >
            <thead>

              <th>S/N</th>
              <th style={(intype === "TRANSFORMERS" || intype === "FEEDERS") ? { display: "" } : { display: "none" }} >District</th>
              <th  style={intype === "TRANSFORMERS" ? { display: "" } : { display: "none" }} >Feeder Name</th>
               <th  style={intype === "FEEDERS" || intype == "TRANSFORMERS" ? { display: "" } : { display: "none" }} >Feeder Code</th>
              <th>{intype}</th>
              <th  style={intype === "TRANSFORMERS" ? { display: "" } : { display: "none" }} >TRANSFORMER CODE</th>
              <th  style={intype === "MARKETERS"  ? { display: "" } : { display: "none" }} >Number of Transformers</th>
             
              <th>Total Billed POP</th>
              <th>Total Paid POP</th>
              <th>CC</th>
              <th>Total Billed Amount</th>
              <th>Total Paid Amount</th>
              <th>CE</th>




            </thead>
            <tbody>
              {values.filter((val) => {
                if (searchterm === "") {
                  return val;
                }
                 else if ((typeof (val._id) === 'string' && val.district && val.feeder) && (val._id.toLowerCase().includes(searchterm.toLowerCase()) || val.district.toLowerCase().includes(searchterm.toLowerCase()) || val.feeder.toLowerCase().includes(searchterm.toLowerCase()))) {
                  return val;
                }
                else if ((typeof (val._id) === 'string' && val.district) && (val._id.toLowerCase().includes(searchterm.toLowerCase()) || val.district.toLowerCase().includes(searchterm.toLowerCase()))) {
                  return val;
                }
                else if (typeof (val._id) === 'string'  && val._id.toLowerCase().includes(searchterm.toLowerCase()) ) {
                  return val;
                }
              }).slice(indexOfFirstPost, indexOfLastPost).map((u: any, i: number) => (
                <tr key={i}>
                  <td>{indexOfFirstPost=indexOfFirstPost + 1}</td>

                  <td style={intype === "TRANSFORMERS" || intype === "FEEDERS" ? { display: "" } : { display: "none" }}>{u.district}</td>
                  <td style={intype == "TRANSFORMERS" ? { display: "" } : { display: "none" }}>{u.feeder}</td>
                  <td style={intype == "FEEDERS" || intype == "TRANSFORMERS" ? { display: "" } : { display: "none" }}>{u.feeder_code}</td>
                 
                  <td style={{ color: "#3b9668", fontWeight: 700 }}>{u._id}</td>
                    <td style={intype == "TRANSFORMERS" ? { display: "" } : { display: "none" }}>{u.transformer_code}</td>
                   <td style={intype == "MARKETERS" ? { display: "" } : { display: "none" }}>{u.totalCount}</td>
                  
                  <td>{u.totalbilledpop}</td>
                  <td>{u.totalpaidpop}</td>
                  <td style={{ fontWeight: "bold" }}>

                    {Math.round(u.totalpaidpop / u.totalbilledpop * 100) + '%'}

                  </td>
                  <td>{u.totalbilledamt.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                  <td>{u.totalpaidamt.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                  <td style={{ fontWeight: "bold" }}>

                    {Math.round(u.totalpaidamt / u.totalbilledamt * 100) + '%'}

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>

       
         <Pagination postsPerpage={postsPerpage} totalPost={values.length} paginate={paginate} currentPage={currentPage} />
      </Modal>
    </div>
  );
};

export default Displayfeedersperf;
