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
        <div className="row">
          <label htmlFor="username">Name</label>
          {formState.usernameError && (
            <span>please fill the field correctly.</span>
          )}
        </div>
        <input
          name="username"
          id="username"
          value={formState.username}
          onChange={(e) =>
            setFormState({ ...formState, username: e.target.value })
          }
          onBlur={handleFormChange}
          onClick={() => setFormState({ ...formState, usernameError: false })}
          className={formState.usernameError === false ? "" : "error"}
          placeholder="e.g Stephen King"
        ></input>
        <div
          className="row
        "
        >
          <label htmlFor="email">Email Address</label>
          {formState.emailError && (
            <span>please fill the field correctly.</span>
          )}
        </div>
        <input
          name="email"
          id="email"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          onBlur={handleFormChange}
          onClick={() => setFormState({ ...formState, emailError: false })}
          className={formState.emailError === false ? "" : "error"}
          placeholder="e.g stephenking@gmail.com"
        ></input>
        <div className="row">
          <label htmlFor="phone">Phone Number</label>
          {formState.phoneError && (
            <span>please fill the field correctly.</span>
          )}
        </div>
        <input
          name="phone"
          type="tel"
          id="phone"
          value={formState.phone}
          onChange={(e) =>
            setFormState({ ...formState, phone: e.target.value })
          }
          onBlur={handleFormChange}
          onClick={() => setFormState({ ...formState, phoneError: false })}
          className={formState.phoneError === false ? "" : "error"}
          placeholder="e.g 51999999999"
        ></input>
      </form>
    </div>
  );
};

export default PersonalInfo;
