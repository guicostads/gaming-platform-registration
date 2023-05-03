//Finish page info

import { useContext } from "react";
import { PageContext } from "../context/context";
import { Link } from "react-router-dom";
import "./Finish.css";

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
    formState,
  } = useContext(PageContext);

  const marineBlue = {
    color: "var(--marine-blue)",
    fontWeight: "500",
  };

  const purplishBlue = {
    color: "var(--purplish-blue)",
    fontWeight: "500",
    fontSize: "1.3rem",
  };

  const coolGray = {
    color: "var(--cool-gray)",
    fontWeight: "400",
  };

  return (
    <div className="finish">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      {!activePlan && (
        <div className="select-plan">
          <div>
            <p>Please, select your prefered plan and add-ons</p>
            <Link to="/plans">Go to Plan Selection</Link>
          </div>
        </div>
      )}
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
              <span style={coolGray}>Online Service</span>
              <span style={marineBlue}>{toggleValue ? "+10/yr" : "+1/mo"}</span>
            </div>
          )}
          {isChecked2 && (
            <div className="row">
              <span style={coolGray}>Larger Storage</span>
              <span style={marineBlue}>{toggleValue ? "+20/yr" : "+2/mo"}</span>
            </div>
          )}
          {isChecked3 && (
            <div className="row">
              <span style={coolGray}>Customizable profile</span>
              <span style={marineBlue}>{toggleValue ? "+20/yr" : "+2/mo"}</span>
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
      {(formState.usernameError === true ||
        formState.emailError === true ||
        formState.phoneError === true) && (
        <div>
          <p>Please, fill all the personal info fields correctly. </p>
          <Link to="/personalinfo">Go to Personal Info</Link>
        </div>
      )}
    </div>
  );
};

export default Finish;
