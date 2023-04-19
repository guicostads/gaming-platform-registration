import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(null);
  const [activePlan, setActivePlan] = useState("");
  const [toggleValue, setToggleValue] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [totalValue, setTotalValue] = useState(null);
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const page = useLocation();
  const path = page.pathname;
  const navigate = useNavigate();
  const paths = ["/personalinfo", "/plans", "/addons", "/finish"];

  const handleSetName = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleSetPhone = (e) => {
    setPhone(e.target.value);
    console.log(phone);
  };

  const handleActivePlan = (e) => {
    setActive(e.target.id);
    setActivePlan(e.target.id);
    setTotalValue(Number(e.target.value));
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
  };

  //control the toggle switch state
  const handleToggle = () => {
    setToggleValue(!toggleValue);
    setActive(!active);
    setTotalValue(null);
    setActivePlan(null);
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
  };

  //control addon btn 1 state
  const handleChange1 = (e) => {
    setIsChecked1(!isChecked1);
    if (!isChecked1) {
      setTotalValue(Number(totalValue) + Number(e.target.value));
    } else {
      setTotalValue(Number(totalValue) - Number(e.target.value));
    }
  };

  //control addon btn 1 state
  const handleChange2 = (e) => {
    setIsChecked2(!isChecked2);
    if (!isChecked2) {
      setTotalValue(Number(totalValue) + Number(e.target.value));
    } else {
      setTotalValue(Number(totalValue) - Number(e.target.value));
    }
  };
  //control addon btn 1 state
  const handleChange3 = (e) => {
    setIsChecked3(!isChecked3);
    if (!isChecked3) {
      setTotalValue(Number(totalValue) + Number(e.target.value));
    } else {
      setTotalValue(Number(totalValue) - Number(e.target.value));
    }
  };

  const handlePrevClick = () => {
    const prevIndex = (currentPathIndex - 1) % paths.length;
    setCurrentPathIndex(prevIndex);
    navigate(paths[prevIndex]);
  };

  const handleNextClick = () => {
    const nextIndex = (currentPathIndex + 1) % paths.length;
    setCurrentPathIndex(nextIndex);
    navigate(paths[nextIndex]);
  };
  //-------

  return (
    <PageContext.Provider
      value={{
        activePlan,
        //totalSum,
        totalValue,
        isChecked1,
        isChecked2,
        isChecked3,
        handleChange1,
        handleChange2,
        handleChange3,
        handleActivePlan,
        active,
        path,
        page,
        toggleValue,
        handleToggle,
        currentPathIndex,
        handlePrevClick,
        handleNextClick,
        handleSetEmail,
        handleSetName,
        handleSetPhone,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
