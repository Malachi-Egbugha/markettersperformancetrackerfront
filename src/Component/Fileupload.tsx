import React, { Fragment, useState } from "react";
import { LOCAL } from "../Api/apiconfig";
import axios from "axios";
import Message from './Message';
import Progress from './Progress';
const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadpercentage] = useState<number>(0);
  const onFileChange = (e: React.ChangeEvent<any>) => {
    
 
    
    setFilename(e.target.files[0].name);
  
    setFile(e.target.files[0]);
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", file);
    try {
      const res = await axios.post(`${LOCAL}/upload`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        }, onUploadProgress: progressEvent => {
          setUploadpercentage(Math.round((progressEvent.loaded * 100)/progressEvent.total))
           setTimeout(() => setUploadpercentage(0), 10000);
        }
      });
     
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      setMessage('File uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("there was a problem with the  server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message}/> :null}
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input
            onChange={onFileChange}
            type="file"
            className="custom-file-input"
            id="customFile"
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
        <Progress percentage={ uploadPercentage}/>
        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
       {uploadedFile ? <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <h3>{
          //uploadedFile.fileName
          }</h3>
        </div>
      </div> : null
      }
     
    </Fragment>
    
  );
};
export default FileUpload;
