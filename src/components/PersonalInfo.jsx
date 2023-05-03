import { useContext } from "react";
import { PageContext } from "../context/context";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  const { setFormState, formState, handleFormChange } = useContext(PageContext);

  return (
    <div>
      <div className="personal-info-header">
        <h1>Personal Info</h1>
        <p>Please provide your name, email adress and phone number.</p>
      </div>
      <form className="personal-info-form">
        <label htmlFor="username">Name</label>

        <input
          name="username"
          id="username"
          onBlur={handleFormChange}
          onClick={() => setFormState({ ...formState, usernameError: false })}
          className={formState.usernameError === false ? "" : "error"}
          placeholder="e.g Stephen King"
        ></input>
        {formState.usernameError === true && (
          <span>please fill the field correctly.</span>
        )}
        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          id="email"
          onBlur={handleFormChange}
          onClick={() => setFormState({ ...formState, emailError: false })}
          className={formState.emailError === false ? "" : "error"}
          placeholder="e.g stephenking@gmail.com"
        ></input>
        {formState.emailError === true && (
          <span>please fill the field correctly.</span>
        )}
        <label htmlFor="phone">Phone Number</label>
        <input
          name="phone"
          type="tel"
          id="phone"
          onBlur={handleFormChange}
          onClick={() => setFormState({ ...formState, phoneError: false })}
          className={formState.phoneError === false ? "" : "error"}
          placeholder="e.g (51) 99999-9999"
        ></input>
        {formState.phoneError === true && (
          <span>please fill the field correctly.</span>
        )}
      </form>
    </div>
  );
};

export default PersonalInfo;
