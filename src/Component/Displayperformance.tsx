import React from "react";
//import { format, parseISO } from "date-fns";
type Props = {
    allocations: any;
}

const Displayperformance = ({ allocations }:Props) => {
  return (
    <div>
      {console.log(allocations)}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">connectiontype</th>
            <th scope="col">cust_category</th>
            <th scope="col">district</th>
            <th scope="col">feeder</th>
            <th scope="col">feeder_code</th>
            <th scope="col">transformer</th>
            <th scope="col">transformer_code</th>
            <th scope="col">billed_pop</th>
            <th scope="col">paid_pop</th>
            <th scope="col">billed_amt</th>
            <th scope="col">paid_amt</th>
            <th scope="col">arrears</th>
            <th scope="col">bill_type</th>
            <th scope="col">MARKETER_NAME</th>
            <th scope="col">STAFF_ID</th>
            <th scope="col">marketer_phone</th>
          </tr>
        </thead>
        <tbody>
           {allocations.map((u:any, i:number) => (
            <tr key={i}>
               <td>{i}</td>
               <td>{ u.connectiontype}</td>
               <td>{u.cust_category }</td>
              <td>{u.district}</td>
              <td>{u.feeder}</td>
              <td>{u.feeder_code}</td>
              <td>{u.transformer}</td>
              <td>{u.transformer_code}</td>
              <td>{u.billed_pop}</td>
              <td>{u.paid_pop}</td>
              <td>{u.billed_amt}</td>
              <td>{u.paid_amt}</td>
               <td>{u.arrears}</td>
               <td>{u.bill_type}</td>
               <td>{u.MARKETER_NAME}</td>
               <td>{u.STAFF_ID}</td>
               <td>{u.marketer_phone}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Displayperformance;
