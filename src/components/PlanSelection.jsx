import Arcade from "../images/icon-arcade.svg";
import Advanced from "../images/icon-advanced.svg";
import Pro from "../images/icon-pro.svg";
import { PlanButton } from "./PlanButton";
import { Switch } from "./Switch";
import { PageContext } from "../context/context";
import { useContext } from "react";
import "./PlanSelection.css";

const PlanSelection = () => {
  const { toggleValue } = useContext(PageContext);

  return (
    <div className="plan-selection">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>
      <div className="plan-content">
        <PlanButton
          id="Arcade"
          plan="Arcade"
          price={toggleValue ? `90/yr` : "9/mo"}
          img={Arcade}
          value={toggleValue ? 90 : 9}
        />
        <PlanButton
          id="Advanced"
          plan="Advanced"
          price={toggleValue ? "120/yr" : "12/mo"}
          img={Advanced}
          value={toggleValue ? 120 : 12}
        />
        <PlanButton
          id="Pro"
          plan="Pro"
          price={toggleValue ? "150/yr" : "15/mo"}
          img={Pro}
          value={toggleValue ? 150 : 15}
        />
      </div>
      <Switch />
    </div>
  );
};

export default PlanSelection;
