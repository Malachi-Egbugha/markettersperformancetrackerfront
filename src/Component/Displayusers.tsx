import { Fragment } from 'react';
type Props = {
  displayusers: any;
  changeStatus: any;
}

const Displayusers = ({ displayusers,changeStatus }:Props) => {
  return (
    <Fragment >
  
      <table className="table" >
        <thead>
          <tr>
            <th  scope="col"></th>
            
            <th  scope="col">Email</th>
         
            <th  scope="col">Update Status</th>
          
            <th  scope="col">ResetPassword</th>
            
          </tr>
        </thead>
        <tbody>
           {displayusers.map((u:any, i:number) => (
            <tr key={i}>
               <td>{i}</td>
               <td>{u.email}</td>
               <td>
                  <button
                onClick={changeStatus}
                  value={u._id}
                  type="button"
                  className={
                    u.status === "active" ? "btn btn-danger" : "btn btn-success"
                  }
                >
                  {u.status === "active" ? "Deactivate" : "Activate"}
                </button>
               </td>
              
               <td>
                  <button
                    onClick={changeStatus}
                  value={u._id}
                  type="button"
                  className=
                     "btn btn-success"
                  
                >
                  Reset
                </button>
                 
                 
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
export default Displayusers;
