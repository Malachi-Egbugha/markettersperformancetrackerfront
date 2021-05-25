import React from "react";
type Props = {
    createUser: string;
}
const Showsuccess = ({ createUser}:Props) => {
  const showSuccess = () =>
    createUser && (
      <div className="alert alert-info">
        <h2> {`${createUser}`}</h2>
      </div>
    );

  return <div>{showSuccess()}</div>;
};
export default Showsuccess;
