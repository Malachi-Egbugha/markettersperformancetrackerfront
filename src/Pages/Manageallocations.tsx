import React, { useState, useEffect } from "react";
import Layouttwo from "../Layout/Layertwo";
import { getAllocations } from "../Api/apicall";
import Displayperformance from '../Component/Displayperformance';
import Pagination from '../Component/Pagination';

const Manageallocations = () => {
   const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerpage] = useState<number>(500);
  const [displayAllocations, setdisplayAllocations] = useState([]);
   const [error, setError] = useState<string>('');

  //Get current posts
  const indexOfLastPost = currentPage * postsPerpage;
  const indexOfFirstPost = indexOfLastPost - postsPerpage;
  const currentAllocation = displayAllocations.slice(indexOfFirstPost, indexOfLastPost);
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
        <Displayperformance
          allocations={currentAllocation} indexOfFirstPost={indexOfFirstPost} />
        <Pagination postsPerpage={postsPerpage} totalPost={displayAllocations.length} paginate={paginate} currentPage={currentPage} />
        
        
       
      </div>
    </Layouttwo>
  );
};
export default Manageallocations;
