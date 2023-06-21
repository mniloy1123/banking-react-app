import { useState } from "react";
import Balance from "./Balance";

const Credits = (props) => {
  const [description, setDescription] = useState("");
  const [creditAmount, setCreditAmount] = useState("");
  const [error, setError] = useState(null);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCreditAmountChange = (e) => {
    const value = e.target.value;
    if (!value || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCreditAmount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && creditAmount) {
      props.handleCredits(parseFloat(creditAmount));
      setError(null);
      setDescription("");
      setCreditAmount("");
    }
  };
  return (
    <div>
      <h1>Credit</h1>
      <p>Both Required:</p>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
        />
        <input
          type={"text"}
          value={creditAmount}
          onChange={handleCreditAmountChange}
          placeholder="Amount"
        />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
      <p> Total Credit: {props.currCredits}</p>
      <Balance
        currCredits={props.currCredits}
        currDebits={props.currDebits}
      ></Balance>
    </div>
  );
};
export default Credits;
