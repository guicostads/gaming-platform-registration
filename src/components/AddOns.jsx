import React, { useContext } from "react";
import { AddOnButton } from "./AddOnButton";
import { PageContext } from "../context/context";
import "./AddOns.css";

const AddOns = () => {
  const { toggleValue} = useContext(PageContext);

  return (
    <div className="addon-box">
      <h1>Pick Add-Ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <AddOnButton
        bonus="Online Service"
        description="Access to multiplayer games"
        price={toggleValue ? "+10/yr" : "+1/mo"}
        id='online'
      />
      <AddOnButton
        bonus="Larger Storage"
        description="Extra 1T of cloud save"
        price={toggleValue ? "+20/yr" : "+2/mo"}
        id='storage'
      />
      <AddOnButton
        bonus="Customizable Profile"
        description="Custom theme on your profile"
        price={toggleValue ? "+20/yr" : "+2/mo"}
        id='customizable'
      />
    </div>
  );
};

export default AddOns;
