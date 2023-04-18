import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(null);
  //const [selected, setSelected] = useState("");
  const [toggleValue, setToggleValue] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [totalValue, setTotalValue] = useState([]);
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const page = useLocation();
  const path = page.pathname;
  const navigate = useNavigate();
  const paths = ["/personalinfo", "/plans", "/addons", "/finish"];

  //const handleSelected = (e) => {
  // setSelected(e.target.value);
  //handleActive();
  // console.log(selected);
  //};

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

  const handleActive = (e) => {
    setActive(e.target.id);
  };

  const handleToggle = (e) => {
    setToggleValue(!toggleValue);
    setActive(!active);
    active
      ? setTotalValue([...totalValue, e.target.value])
      : setTotalValue([totalValue]);
  };

  const totalSum = () =>
    totalValue.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  const handleChange = (e) => {
    setIsChecked(!isChecked);
    isChecked
      ? setTotalValue([...totalValue, e.target.value])
      : setTotalValue([totalValue]);
  };

  const handleChange1 = () => {
    setIsChecked1(!isChecked1);
    isChecked
      ? setTotalValue([...totalValue, e.target.value])
      : setTotalValue([...totalValue]);
  };

  const handleChange2 = () => {
    setIsChecked2(!isChecked2);
    isChecked
      ? setTotalValue([...totalValue, e.target.value])
      : setTotalValue([...totalValue]);
  };

  const handleChange3 = () => {
    setIsChecked3(!isChecked3);
    isChecked
      ? setTotalValue([...totalValue, e.target.value])
      : setTotalValue([...totalValue]);
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
        //handleSelected,
        isChecked,
        isChecked1,
        isChecked2,
        isChecked3,
        handleChange1,
        handleChange2,
        handleChange3,
        handleChange,
        handleActive,
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
