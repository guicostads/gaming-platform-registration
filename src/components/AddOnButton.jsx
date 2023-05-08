//button with the addons
import "./AddOnButton.css";

export const AddOnButton = ({
  id,
  description,
  price,
  isChecked,
  onChange,
  value,
  onClick
}) => {

  
  
  return (
    <button className={isChecked ? "checked" : "not-checked"}>
      <input
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
        value={value}
      />
      <div>
        <h3> {id} </h3>
        <span>{description}</span>
      </div>
      <span style={{fontWeight: '600'}}>{price}</span>
    </button>
  );
};
