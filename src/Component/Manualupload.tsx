
type Props = {
  Tranformerstats: any;
  Feederstats: any;
  Districtstats: any;



}

const Manualupload = ({ Tranformerstats, Feederstats, Districtstats }: Props) => {

    return(
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
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label>Connection Type:</label>
            
                    <select
              
                        className="form-control"
           
                        required
                    >
                        <option>Please Select</option>
                        <option value="Metered">Metered</option>
                        <option value="Unmetered">Unmetered</option>
                     
                      
                      
                    </select>
                </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label>Customer Category:</label>
            
                    <select
              
                        className="form-control"
           
                        required
                    >
                        <option>Please Select</option>
                        <option value="MD">MD</option>
                        <option value="NON-MD">NON-MD</option>
                     
                      
                      
                    </select>
                </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label>District:</label>
            
                    <select
              
                        className="form-control"
           
                        required
                    >
                        <option>Please Select</option>
                        {Districtstats.map((u: any, i:number) => (
                            <option key={i} value={u._id}>{u._id}</option>

                        )
                        
                        )}
             
                     
                      
                      
                    </select>
                </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label>Feeder:</label>
            
                    <select
              
                        className="form-control"
           
                        required
                    >
                        <option>Please Select</option>
                        {Feederstats.map((u: any, i:number) => (
                            <option key={i} value={u._id}>{u._id}</option>

                        )
                        
                        )}
             
                     
                      
                      
                    </select>
                </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label>Feeder Code:</label>
            
                    <select
              
                        className="form-control"
           
                        required
                    >
                        <option>Please Select</option>
                        {Feederstats.map((u: any, i:number) => (
                            <option key={i} value={u.feeder_code}>{u.feeder_code}</option>

                        )
                        
                        )}
             
                     
                      
                      
                    </select>
                </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label>Transformer:</label>
            
                    <select
              
                        className="form-control"
           
                        required
                    >
                        <option>Please Select</option>
                        {Tranformerstats.map((u: any, i:number) => (
                            <option key={i} value={u._id}>{u._id}</option>

                        )
                        
                        )}
             
                     
                      
                      
                    </select>
                </div>
            </div>
        
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label>Transformer Code:</label>
            
                    <select
              
                        className="form-control"
           
                        required
                    >
                        <option>Please Select</option>
                        {Tranformerstats.map((u: any, i:number) => (
                            <option key={i} value={u.transformer_code
                            }>{u.transformer_code
                                }</option>

                        )
                        
                        )}
             
                     
                      
                      
                    </select>
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
    )
}
export default Manualupload;