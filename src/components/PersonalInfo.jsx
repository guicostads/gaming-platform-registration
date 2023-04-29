import { useContext } from "react";
import { PageContext } from "../context/context";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  const {
    setName,
    setPhone,
    setEmail,
    phone,
    email,
    name,
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
          value={name}
          type="text"
          placeholder="e.g Stephen King"
          onChange={(e) => setName(e.target.value)}
          className="not-active"
        ></input>

        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          id="email"
          value={email}
          placeholder="e.g stephenking@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          className="not-active"
        ></input>

        <label htmlFor="phone">Phone Number</label>
        <input
          name="phone"
          type="tel"
          id="phone"
          value={phone}
          placeholder="e.g (51) 99999-9999"
          onChange={(e) => setPhone(e.target.value)}
          className="not-active"
        ></input>
      </form>
    </div>
  );
};

export default PersonalInfo;
