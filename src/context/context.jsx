import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(null);
  //const [selected, setSelected] = useState("");
  const [toggleValue, setToggleValue] = useState(false);
  const [isChecked, setIsChecked] = useState(null);
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const navigate = useNavigate();
  const paths = ["/page1", "/page2", "/page3", "/page4"];

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

  const handleToggle = () => {
    setToggleValue(!toggleValue);
    setActive(!active);
  };

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

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
        isChecked,
        handleChange,
        handleActive,
        active,
        toggleValue,
        handleToggle,
        currentPathIndex,
        handlePrevClick,
        handleNextClick,
        //handleSelected,
        handleSetEmail,
        handleSetName,
        handleSetPhone,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
