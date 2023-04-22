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

  const marineBlue = {
    color: "var(--marine-blue)",
  };

  const purplishBlue = {
    color: "var(--purplish-blue)",
    fontWeight: "400",
  };

  const coolGray = {
    color: "var(--cool-gray)",
  };

  return (
    <div className="finish">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      {activePlan && (
        <div className="finish-items">
          <div className="row">
            <span style={marineBlue}>
              {activePlan} {toggleValue ? "(Yearly)" : "(Monthly)"}
            </span>
            <span style={marineBlue}>
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
              <span style={purplishBlue}>
                {toggleValue ? "+10/yr" : "+1/mo"}
              </span>
            </div>
          )}
          {isChecked2 && (
            <div className="row">
              <span>Larger Storage</span>
              <span style={purplishBlue}>
                {toggleValue ? "+20/yr" : "+2/mo"}
              </span>
            </div>
          )}
          {isChecked3 && (
            <div className="row">
              <span>Customizable profile</span>
              <span style={purplishBlue}>
                {toggleValue ? "+20/yr" : "+2/mo"}
              </span>
            </div>
          )}
        </div>
      )}
      {activePlan && (
        <div className="row" style={{ padding: ".75rem" }}>
          <span style={coolGray}>
            Total{toggleValue ? " (per year)" : " (per month)"}
          </span>
          <span style={purplishBlue}>
            ${totalPrice}/{toggleValue ? "yr" : "mo"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Finish;
