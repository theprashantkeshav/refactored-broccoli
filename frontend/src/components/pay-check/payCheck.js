import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PayCheck = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      <Link to={auth?.user?.payment?.isPaid ? "/" : "/payment"}>Pay-Check</Link>
    </div>
  );
};

export default PayCheck;
