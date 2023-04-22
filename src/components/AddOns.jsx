import React, { useContext, useState } from "react";
import { AddOnButton } from "./AddOnButton";
import { PageContext } from "../context/context";
import "./AddOns.css";

const AddOns = () => {
  const {
    toggleValue,
    isChecked1,
    isChecked2,
    isChecked3,
    handleChange1,
    handleChange2,
    handleChange3,
  } = useContext(PageContext);

  return (
    <div className="addon-box">
      <h1>Pick Add-Ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <AddOnButton
        id="Online Service"
        description="Access to multiplayer games"
        price={toggleValue ? "+10/yr" : "+1/mo"}
        value={toggleValue ? 10 : 1}
        isChecked={isChecked1}
        onChange={handleChange1}
      />
      <AddOnButton
        id="Larger Storage"
        description="Extra 1T of cloud save"
        price={toggleValue ? "+20/yr" : "+2/mo"}
        value={toggleValue ? 20 : 2}
        isChecked={isChecked2}
        onChange={handleChange2}
      />
      <AddOnButton
        id="Customizable Profile"
        description="Custom theme on your profile"
        price={toggleValue ? "+20/yr" : "+2/mo"}
        value={toggleValue ? 20 : 2}
        isChecked={isChecked3}
        onChange={handleChange3}
      />
    </div>
  );
};

export default AddOns;
