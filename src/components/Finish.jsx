//Finish page info

import { useContext } from "react";
import { PageContext } from "../context/context";
import "./Finish.css";
import { Link } from "react-router-dom";

const Finish = () => {
  const {
    activePlan,
    totalPrice,
    toggleValue,
    planPrice,
    isChecked1,
    isChecked2,
    isChecked3,
    setActivePlan,
  } = useContext(PageContext);

  return (
    <div className="finish">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      {activePlan && (
        <div className="finish-items">
          <div className="row">
            <span>
              {activePlan} {toggleValue ? "(yearly)" : "(monthly)"}
            </span>
            <span>
              ${planPrice}
              {toggleValue ? "/yr" : "/mo"}
            </span>
          </div>
          <Link to="/plans" onClick={() => setActivePlan(null)}>
            Change
          </Link>
          {isChecked1 && (
            <div className="row">
              <span>Online Service</span>
              {toggleValue ? "+10/yr" : "+1/mo"}
            </div>
          )}
          {isChecked2 && (
            <div className="row">
              <span>Larger Storage</span>
              {toggleValue ? "+20/yr" : "+2/mo"}
            </div>
          )}
          {isChecked3 && (
            <div className="row">
              <span>Customizable profile</span>
              {toggleValue ? "+20/yr" : "+2/mo"}
            </div>
          )}
        </div>
      )}
      {activePlan && (
        <div className="row" style={{padding: '.75rem'}}>
          <span>Total{toggleValue ? " (per year)" : " (per month)"}</span>$
          {totalPrice}/{toggleValue ? "yr" : "mo"}
        </div>
      )}
    </div>
  );
};

export default Finish;
