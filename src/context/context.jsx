import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [planPrice, setPlanPrice] = useState("");
  const [activePlan, setActivePlan] = useState(null);
  const [toggleValue, setToggleValue] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);
  const page = useLocation();
  const path = page.pathname;

  

  //control the slected plan
  const handleActivePlan = (e) => {
    setActivePlan(e.target.id);
    setTotalPrice(Number(e.target.value));
    setPlanPrice(e.target.value);
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
  };

  //control the toggle switch state
  const handleToggle = () => {
    setToggleValue(!toggleValue);
    setActivePlan(!activePlan);
    setTotalPrice(null);
    setActivePlan(null);
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
  };

  //control addon btn 1 state
  const handleChange1 = (e) => {
    setIsChecked1(!isChecked1);
    if (!isChecked1) {
      setTotalPrice(Number(totalPrice) + Number(e.target.value));
    } else {
      setTotalPrice(Number(totalPrice) - Number(e.target.value));
    }
  };

  //control addon btn 2 state
  const handleChange2 = (e) => {
    setIsChecked2(!isChecked2);
    if (!isChecked2) {
      setTotalPrice(Number(totalPrice) + Number(e.target.value));
    } else {
      setTotalPrice(Number(totalPrice) - Number(e.target.value));
    }
  };

  //control addon btn 3 state
  const handleChange3 = (e) => {
    setIsChecked3(!isChecked3);
    if (!isChecked3) {
      setTotalPrice(Number(totalPrice) + Number(e.target.value));
    } else {
      setTotalPrice(Number(totalPrice) - Number(e.target.value));
    }
  };

  //-------

  return (
    <PageContext.Provider
      value={{
        totalPrice,
        isChecked1,
        isChecked2,
        isChecked3,
        handleChange1,
        handleChange2,
        handleChange3,
        handleActivePlan,
        setActivePlan,
        activePlan,
        path,
        page,
        planPrice,
        toggleValue,
        handleToggle,
        setEmail,
        setPhone,
        setName,
        phone,
        name,
        email,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
