
type Props = {
  allocations: any;
  indexOfFirstPost: number;
}

const Displayperformance = ({ allocations,indexOfFirstPost }:Props) => {
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
             <th scope="col">CC</th>
            <th scope="col">billed_amt</th>
            <th scope="col">paid_amt</th>
            <th scope="col">CE</th>
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
               <td>{indexOfFirstPost=indexOfFirstPost + 1}</td>
               <td>{ u.connectiontype}</td>
               <td>{u.cust_category }</td>
              <td>{u.district}</td>
              <td>{u.feeder}</td>
              <td>{u.feeder_code}</td>
              <td>{u.transformer}</td>
              <td>{u.transformer_code}</td>
              <td>{u.billed_pop}</td>
               <td>{u.paid_pop}</td>
               <td>{Math.ceil(u.paid_pop/u.billed_pop*100) +'%'}</td>
              <td>{(Number(u.billed_amt)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
               <td>{(Number(u.paid_amt)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                 <td>{Math.ceil(Number(u.paid_amt)/Number(u.billed_amt)*100) + '%'}</td>
               <td>{u.arrears.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
               <td>{u.bill_type}</td>
               <td>{u.MARKETER_NAME}</td>
               <td>{u.STAFF_ID}</td>
               <td>{`0${u.marketer_phone}`}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Displayperformance;
