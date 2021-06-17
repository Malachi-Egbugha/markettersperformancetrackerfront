
type Props = {
  Tranformerstats: any;
  Feederstats: any;
    Districtstats: any;
    handleChange: any;
    values: any;
    clickSubmit: any;



}

const Manualupload = ({ Tranformerstats, Feederstats, Districtstats,handleChange,values,clickSubmit }: Props) => {
     const {
         MARKETER_NAME,
         STAFF_ID,
         marketer_phone,
         bill_type,
         arrears,
         paid_amt,
         billed_amt,
         paid_pop,
         billed_pop,
         transformer_code,
         transformer,
         feeder_code,
         feeder,
         district,
         cust_category,
         connectiontype,
   
  } = values;

    return(
    <form onSubmit={clickSubmit}>
        <div className="row">
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label>MARKETER NAME:</label>
                    <input
                        onChange={handleChange("MARKETER_NAME")}
                            type="text"
                            value={MARKETER_NAME}
                            className="form-control"
                            required
                    />
          
         
                </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label>STAFF ID:</label>
                        <input
                            onChange={handleChange("STAFF_ID")}
                            value={STAFF_ID}
                        type="text"
                            className="form-control"
                            required
                    />
          
         
                </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label> Marketer Phone:</label>
                        <input
                        onChange={handleChange("marketer_phone")}
                        value={marketer_phone}
                        type="phone"
                            className="form-control"
                            required
                    />
          
         
                </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label>Bill Type:</label>
                    <select
                    onChange={handleChange("bill_type")}
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
                        onChange={handleChange("arrears")}
                        value={arrears}
                        type="number"
                        className="form-control"
                        required
                    />
          
         
                </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label> Paid Amount:</label>
                        <input
                        onChange={handleChange("paid_amt")}
                        value={paid_amt}
                        type="number"
                        className="form-control"
                        required
                    />
          
         
                </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label> Billed Amount:</label>
                        <input
                             onChange={handleChange("billed_amt")}
                        value={billed_amt}
                        type="number"
                            className="form-control"
                            required
                    />
          
         
                </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label> Paid POP:</label>
                        <input
                        onChange={handleChange("paid_pop")}
                        value={paid_pop}
                        type="number"
                        className="form-control"
                        required
                    />
          
         
                </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                    <label> Billed POP:</label>
                        <input
                        onChange={handleChange("billed_pop")}
                        value={billed_pop}
                        type="number"
                        className="form-control"
                        required
                    />
          
         
                </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
                <div className="form-group">
                        <label>Connection Type:</label>
                    <select
                        onChange={handleChange("connectiontype")}
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
                        onChange={handleChange("cust_category")}
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
                  onChange={handleChange("district")}
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
                        onChange={handleChange("feeder")}
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
                        onChange={handleChange("feeder_code")}
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
                        onChange={handleChange("transformer")}
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
                            onChange={handleChange("transformer_code")}
              
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