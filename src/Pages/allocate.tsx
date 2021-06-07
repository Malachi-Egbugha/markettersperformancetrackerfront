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
           
              
            <form>
                <div className="row">
        <div className="input-field col-sm-6 col-lg-4">
                  <div className="form-group">
                    <label>MARKETER NAME:</label>
          <input
      
            type="text"
            className="form-control"
          />
          
         
                </div>
                </div>
                 <div className="input-field col-sm-6 col-lg-4">
                  <div className="form-group">
                    <label>STAFF ID:</label>
          <input
      
            type="text"
            className="form-control"
          />
          
         
                </div>
                </div>
                 <div className="input-field col-sm-6 col-lg-4">
                  <div className="form-group">
                    <label> Marketer Phone:</label>
          <input
      
            type="phone"
            className="form-control"
          />
          
         
                </div>
                </div>
                 <div className="input-field col-sm-6 col-lg-4">
                  <div className="form-group">
                    <label>Bill Type:</label>
            
            <select
              
              className="form-control"
           
              required
            >
              <option>Please Select</option>
              <option value="NMD Meter Reading">NMD Meter Reading</option>
                      <option value="STORED_AVG">STORED_AVG</option>
                      <option value="DT Meter Reading">DT Meter Reading</option>
                      <option value="Unmetered">Unmetered</option>
                      <option value="Metered Bulk Reading">Metered Bulk Reading</option>
                      <option value="MD Meter Reading">MD Meter Reading</option>
                      <option value="CAP Fix">CAP Fix</option>
                      
            </select>
          </div>
        </div>
                 <div className="input-field col-sm-6 col-lg-4">
                  <div className="form-group">
                    <label> Arrears:</label>
          <input
      
            type="number"
            className="form-control"
          />
          
         
                </div>
                </div>
                  <div className="input-field col-sm-6 col-lg-4">
                  <div className="form-group">
                    <label> Paid Amount:</label>
          <input
      
            type="number"
            className="form-control"
          />
          
         
                </div>
                </div>
                <div className="input-field col-sm-6 col-lg-4">
                  <div className="form-group">
                    <label> Billed Amount:</label>
          <input
      
            type="number"
            className="form-control"
          />
          
         
                </div>
                </div>
                 <div className="input-field col-sm-6 col-lg-4">
                  <div className="form-group">
                    <label> Paid POP:</label>
          <input
      
            type="number"
            className="form-control"
          />
          
         
                </div>
                </div>
                <div className="input-field col-sm-6 col-lg-4">
                  <div className="form-group">
                    <label> Billed POP:</label>
          <input
      
            type="number"
            className="form-control"
          />
          
         
                </div>
                </div>

              </div>
     <button
        type="submit"
     
          
        className="btn btn-primary btn-block mt-4"
        
      >
        Submit
      </button>
        
   
      </form>
              
            
          </div>
              </div>
           
               
      </div>
    </Layouttwo>
  );
};
export default Allocate;
