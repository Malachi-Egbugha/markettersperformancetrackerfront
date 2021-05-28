import { type } from "os";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { updateemail } from "../Api/apicall";
type Props = {
    modalEmailIsOpen: any;
    setModalEmailIsOpen: any;
    edituserinfo: any;
    fetchemailstatus: any;
  
    
}

const Editpassword = ({
  modalEmailIsOpen,
    setModalEmailIsOpen,
    edituserinfo,
  fetchemailstatus,
 
}:Props) => {
  Modal.setAppElement("#root");

  let { _id } = edituserinfo;
  let [values, setValues] = useState({
    email: "",
  });

  //check selected to identify selected
  const handleChange = (name:any) => (event:any) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = async (event:any) => {
      event.preventDefault();
      let id = _id;
       
    let updatemail = await updateemail(id, { ...values });
    setValues({ ...values, email: "" });
    fetchemailstatus(updatemail);
  };

  return (
    <div>
      <Modal
        isOpen={modalEmailIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalEmailIsOpen(false)}
        style={{
          content: {
            color: "#000000",
            top: "40%",
            left: "30%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            width: "40%",
            backgroundColor: "#35a4ba",
       
            //transform: "translate(-50%, -50%)",
          },
        }}
      >
        <form onSubmit={clickSubmit}>
          <div className="row">
            <div className="input-field col-sm-12 col-lg-12">
              <div className="form-group">
                <label>Enter New Email:</label>
                <input
                  value={values.email}
                  onChange={handleChange("email")}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter New Password"
                  required
                />
              </div>
            </div>
          </div>

          <button className="btn btn-primary">Submit</button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEmailIsOpen(false)}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Editpassword;
