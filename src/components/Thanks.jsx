import CheckMark from "../images/icon-checkmark.svg";
import "./Thanks.css";

export const Thanks = () => {
  return (
    <div className="thanks">
      <div>
        <img src={CheckMark} alt="checkmark" />
      </div>
      <h1>Thank you!</h1>
      <p>Thank you for subscribing to our platform! We hope you have fun using it. If you need any support, feel free to contact us at support@platformexample.com.</p>
    </div>
  );
};
