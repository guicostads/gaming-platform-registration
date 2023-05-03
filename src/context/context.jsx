import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const page = useLocation();
  const path = page.pathname;
  const [planPrice, setPlanPrice] = useState("");
  const [activePlan, setActivePlan] = useState(null);
  const [toggleValue, setToggleValue] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);
  // form states and validation
  const [formState, setFormState] = useState({
    username: "",
    usernameError: false,
    email: "",
    emailError: false,
    phone: "",
    phoneError: false,
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const phoneRegex = /^\d{11}$/;

    switch (fieldName) {
      case "username":
        if (value === "" || !nameRegex.test(value)) {
          setFormState({
            ...formState,
            usernameError: true,
          });
        } else {
          setFormState({
            ...formState,
            usernameError: false,
          });
        }
        break;
      case "email":
        if (value === "" || !emailRegex.test(value)) {
          setFormState({
            ...formState,
            emailError: true,
          });
        } else {
          setFormState({
            ...formState,
            emailError: false,
          });
        }
        break;
      case "phone":
        if (value === "" || !phoneRegex.test(value)) {
          setFormState({
            ...formState,
            phoneError: true,
          });
        } else {
          setFormState({
            ...formState,
            phoneError: false,
          });
        }
        break;
    }
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

  //control addon btn 1 state and totalprice value
  const handleSelected1 = (e) => {
    setIsChecked1(!isChecked1);
    if (!isChecked1) {
      setTotalPrice(Number(totalPrice) + Number(e.target.value));
    } else {
      setTotalPrice(Number(totalPrice) - Number(e.target.value));
    }
  };

  //control addon btn 2 state and totalprice value
  const handleSelected2 = (e) => {
    setIsChecked2(!isChecked2);
    if (!isChecked2) {
      setTotalPrice(Number(totalPrice) + Number(e.target.value));
    } else {
      setTotalPrice(Number(totalPrice) - Number(e.target.value));
    }
  };

  //control addon btn 3 state and totalprice value
  const handleSelected3 = (e) => {
    setIsChecked3(!isChecked3);
    if (!isChecked3) {
      setTotalPrice(Number(totalPrice) + Number(e.target.value));
    } else {
      setTotalPrice(Number(totalPrice) - Number(e.target.value));
    }
  };

  return (
    <PageContext.Provider
      value={{
        totalPrice,
        isChecked1,
        isChecked2,
        isChecked3,
        handleSelected1,
        handleSelected2,
        handleSelected3,
        handleActivePlan,
        setActivePlan,
        activePlan,
        path,
        page,
        planPrice,
        toggleValue,
        handleToggle,
        handleFormChange,
        formState,
        setFormState,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
