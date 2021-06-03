import React, { useState, useEffect } from "react";
import Layouttwo from "../Layout/Layertwo";
import { getAllocations } from "../Api/apicall";
import Displayperformance from '../Component/Displayperformance';
import Pagination from '../Component/Pagination';
import Search from '../Component/Search';
import { pad } from "../Component/helpers";

const Manageallocations = () => {
   const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerpage] = useState<number>(500);
  const [displayAllocations, setdisplayAllocations] = useState([]);
  const [error, setError] = useState<string>('');
  const [searchterm, setSearchterm] = useState<string>("");

  //Get current posts
  const indexOfLastPost = currentPage * postsPerpage;
  const indexOfFirstPost = indexOfLastPost - postsPerpage;
  //search for data
  const searchmethod = (event:any) => {
    setSearchterm(event.target.value);
 }
  const currentAllocation = displayAllocations.filter((val:any) =>
  {
 
    
    if (searchterm === "")
    {
      return val;
    }
    else if (typeof(val.MARKETER_NAME) !== 'undefined' && typeof(val.STAFF_ID) !== 'undefined' && (val.MARKETER_NAME.toLowerCase().includes(searchterm.toLowerCase()) || pad(val.STAFF_ID,5).includes(searchterm)) ) {
      return val;
    }
  }).slice(indexOfFirstPost, indexOfLastPost);
//load allocations
  const loadDsiplayAllocations = async () => {
    let getallocations = await getAllocations();
    getallocations.error ? setError(getallocations.error) : setdisplayAllocations(getallocations.ourPerformance);
    
    
  };
  
  const paginate = (pageNumber:number) => {
    //setInfo("");
    setCurrentPage(pageNumber);
  };
 
useEffect(() => {
     loadDsiplayAllocations();
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
            <h1 className="text-primary-p">Manage Allocations</h1>
       
          </div>
        </div>

        <hr className="main__cards" />
        {showError()}
        <Search searchmethod={ searchmethod} placeholder="Search by Name or Staff ID"/>
        <Displayperformance
          allocations={currentAllocation} indexOfFirstPost={indexOfFirstPost}  />
        <Pagination postsPerpage={postsPerpage} totalPost={displayAllocations.length} paginate={paginate} currentPage={currentPage} />
        
        
       
      </div>
    </Layouttwo>
  );
};
export default Manageallocations;
