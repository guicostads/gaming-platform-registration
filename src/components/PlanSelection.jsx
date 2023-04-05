import Arcade from "../images/icon-arcade.svg";
import Advanced from "../images/icon-advanced.svg";
import Pro from "../images/icon-pro.svg";
import { Button } from "./Button";
import { Switch } from "./Switch";
import { PageContext } from "../context/context";
import { useContext } from "react";
import "./PlanSelection.css";


const PlanSelection = () => {
  const { toggleValue } = useContext(PageContext);


  return (
    <div className="plan-selection">
     {!toggleValue && (<div className="plan-selection">
       <Button id="1" plan="Arcade" price="9/mo" img={Arcade} />
        <Button id="2" plan="Advanced" price="12/mo" img={Advanced} />
        <Button id="3" plan="Arcade" price="9/mo" img={Pro} />
     </div>)}
      <Switch /> 
    </div>
  );
};

export default PlanSelection;
