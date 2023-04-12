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
      <div className="plan-selection">
        <PlanButton
          id="1"
          plan="Arcade"
          price={toggleValue ? "90/yr" : "9/mo"}
          img={Arcade}
        />
        <PlanButton
          id="2"
          plan="Advanced"
          price={toggleValue ? "120/yr" : "12/mo"}
          img={Advanced}
        />
        <PlanButton
          id="3"
          plan="Pro"
          price={toggleValue ? "150/yr" : "15/mo"}
          img={Pro}
        />
      </div>
      <Switch />
    </div>
  );
};

export default PlanSelection;
