//button with the addons
import "./AddOnButton.css";

export const AddOnButton = ({
  bonus,
  description,
  price,
  isChecked,
  onChange,
  value,
}) => {
  return (
    <button className={isChecked ? "checked" : "not-checked"}>
      <input type="checkbox" onChange={onChange} checked={isChecked} value={value}/>
      <div>
        <h3> {bonus} </h3>
        <span>{description}</span>
      </div>
      <span style={{ fontWeight: "500" }}>{price}</span>
    </button>
  );
};
