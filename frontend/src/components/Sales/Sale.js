import React from "react";
import "./sale.css";

const Sale = () => {
  return (
    <div className="sale">
      <div className="sale-tag">
        <h1>Diwali SPECIAL OFFER</h1>
        <h1>65% DISCOUNT</h1>
        <h1>
          AT JUST ₹699 <span className="price">₹1999</span>
        </h1>
        {/* <h1>100 Premium Subscriptions Giveaway.</h1>
        <h2>Contact-Us to Avail the Offer.</h2>
        <h2>Last Date: 2nd May 2022</h2> */}
      </div>
    </div>
  );
};

export default Sale;
