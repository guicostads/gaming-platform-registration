import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const page = useLocation();
  const navigate = useNavigate();
  const path = page.pathname;
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

  //control addon btn 1 state
  const handleChange2 = (e) => {
    setIsChecked2(!isChecked2);
    if (!isChecked2) {
      setTotalPrice(Number(totalPrice) + Number(e.target.value));
    } else {
      setTotalPrice(Number(totalPrice) - Number(e.target.value));
    }
  };
  //control addon btn 1 state
  const handleChange3 = (e) => {
    setIsChecked3(!isChecked3);
    if (!isChecked3) {
      setTotalPrice(Number(totalPrice) + Number(e.target.value));
    } else {
      setTotalPrice(Number(totalPrice) - Number(e.target.value));
    }
  };

  //previous page on 'go back' btn
  const handlePrevClick = () => {
    const prevIndex = (currentPathIndex - 1) % paths.length;
    setCurrentPathIndex(prevIndex);
    navigate(paths[prevIndex]);
  };

  //next page on 'next step' btn

  const handleNextClick = () => {
    const nextIndex = (currentPathIndex + 1) % paths.length;
    setCurrentPathIndex(nextIndex);
    navigate(paths[nextIndex]);
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
