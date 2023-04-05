import { useContext } from "react";
import { PageContext } from "../context/context";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  const {
    handleSetEmail,
    handleSetName,
    handleSetPhone,
    handleActive,
    active,
  } = useContext(PageContext);

  return (
    <div>
      <form className="personal-info">
        <h1>Personal Info</h1>
        <p>Please provide your name, email adress and phone number.</p>

        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="e.g Stephen King"
          onChange={handleSetName}
          onClick={handleActive}
          className={active === "name" ? "active" : "not-active"}
        ></input>

        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          id="email"
          placeholder="e.g stephenking@gmail.com"
          onChange={handleSetEmail}
          onClick={handleActive}
          className={active === "email" ? "active" : "not-active"}
        ></input>

        <label htmlFor="phone">Phone Number</label>
        <input
          name="phone"
          type="number"
          id="phone"
          placeholder="e.g (51) 99999-9999"
          onChange={handleSetPhone}
          onClick={handleActive}
          className={active === "phone" ? "active" : "not-active"}
        ></input>
      </form>
    </div>
  );
};

export default PersonalInfo;
