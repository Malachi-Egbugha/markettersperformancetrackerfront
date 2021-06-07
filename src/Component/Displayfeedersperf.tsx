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

              <th scope="col">S/N</th>
              <th scope="col" style={intype === "TRANSFORMERS" || intype === "FEEDERS" ? { display: "block" } : { display: "none" }} >District</th>
              <th scope="col">{intype}</th>
               <th scope="col" style={intype === "MARKETERS"  ? { display: "block" } : { display: "none" }} >Number of Transformers</th>
              <th scope="col" style={intype === "TRANSFORMERS" ? { display: "block" } : { display: "none" }} >FeederName</th>
              <th scope="col" style={intype === "FEEDERS" ? { display: "block" } : { display: "none" }} >FeederCode</th>
              <th scope="col">TotalBilledPOP</th>
              <th scope="col">TotalPaidPOP</th>
              <th scope="col">CC</th>
              <th scope="col">TotalBilledAmount</th>
              <th scope="col">TotalPaidAmount</th>
              <th scope="col">CE</th>




            </thead>
            <tbody>
              {values.filter((val) => {
                console.log(typeof val._id);
                if (searchterm === "") {
                  return val;
                }
                else if (typeof (val._id) === 'string' && val._id.toLowerCase().includes(searchterm.toLowerCase())) {
                  return val;
                }
              }).slice(indexOfFirstPost, indexOfLastPost).map((u: any, i: number) => (
                <tr key={i}>
                  <td>{indexOfFirstPost=indexOfFirstPost + 1}</td>

                  <td style={intype === "TRANSFORMERS" || intype === "FEEDERS" ? { display: "block" } : { display: "none" }}>{u.district}</td>

                  <td style={{color:"#3b9668",fontWeight:700}}>{u._id}</td>
                   <td style={intype == "MARKETERS" ? { display: "block" } : { display: "none" }}>{u.totalCount}</td>
                  <td style={intype == "TRANSFORMERS" ? { display: "block" } : { display: "none" }}>{u.feeder}</td>
                  <td style={intype == "FEEDERS" ? { display: "block" } : { display: "none" }}>{u.feeder_code}</td>
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
