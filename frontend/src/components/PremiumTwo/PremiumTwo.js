import React from "react";
import { Link } from "react-router-dom";
import Payment from "../payment/payment";
import { useSelector } from "react-redux";
import "../Premium/premium.css";

const PremiumTwo = () => {
  const auth = useSelector((state) => state.auth);
  const isPremium = auth?.user?.payment?.isPaid;

  if (isPremium) {
    window.location.assign(window.location.origin);
  }

  return (
    <div>
      <div className="premium-body">
        <div className="p-d-two">
          <div className="card-premium-two">
            <div className="card-header header-premium">
              <h1>Premium</h1>
            </div>
            <div className="card-body">
              <h2>
                At ₹999<span className="price">₹1999</span>{" "}
                <span className="off">(50% OFF)</span>
              </h2>
              {/* <h2>At Just ₹1999/Lifetime</h2> */}

              <div>
                <ul className="card-element-container">
                  <li className="card-element">
                    SSB Like Interface With Practice and Test Mode.
                  </li>
                  <li className="card-element">
                    Full Module(Half sets in Practice Module & Half Sets in Test
                    Module) of OIR(10 Sets), PPDT(20 Sets), TAT(20 sets), WAT(10
                    Sets), SRT(10 Sets), GPE(10 Sets) and SDT with their
                    Solutions.
                  </li>
                  <li className="card-element">
                    Solutions Prepared by the Faculty Members of RECOMMENDED
                    Candidates.
                  </li>
                  <li className="card-element">
                    One years of Premium Subscription with No Ads.
                  </li>
                  <li style={{ color: "red" }} className="card-element">
                    Note - The Premium is 100% Free for the Wards of Martyrs of
                    Indian Armed Forces. Contact Us to Avail the Offer.
                  </li>
                </ul>
              </div>
              <div className="demo-faculty">
                <Link className="btn-d btn-premium" to="/demo">
                  Demo
                </Link>
                <Link className="btn-f btn-premium" to="/faculties">
                  Faculty
                </Link>
              </div>
            </div>
          </div>
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default PremiumTwo;
