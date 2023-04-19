import { useContext } from "react";
import { PageContext } from "../context/context";

const Finish = () => {
  const { activePlan, totalValue } = useContext(PageContext);

  return (
    <div>
      <p>{totalValue}</p>
      <p>{activePlan}</p>
    </div>
  );
};

export default Finish;
