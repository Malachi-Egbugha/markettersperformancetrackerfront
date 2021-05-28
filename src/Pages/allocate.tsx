import Layouttwo from "../Layout/Layertwo"
import FileUpload from "../Component/Fileupload"

const Allocate = () => {
  
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
              </div>
            </div>
            <div className="charts__right__cards">
              

              
            </div>
          </div>
              </div>
           
               
      </div>
    </Layouttwo>
  );
};
export default Allocate;
