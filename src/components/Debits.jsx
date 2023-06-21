import { useState } from "react";
import Balance from "./Balance";

const Debits = (props) => {
  const [description, setDescription] = useState("");
  const [debitAmount, setDebitAmount] = useState("");
  const [error, setError] = useState(null);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDebitAmountChange = (e) => {
    const value = e.target.value;
    if (!value || /^\d+(\.\d{0,2})?$/.test(value)) {
      setDebitAmount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && debitAmount) {
      props.handleDebits(parseFloat(debitAmount));
      setError(null);
      setDescription("");
      setDebitAmount("");
    }
  };
  return (
    <div>
      <h1>Debits</h1>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
        />
        <input
          type={"text"}
          value={debitAmount}
          onChange={handleDebitAmountChange}
          placeholder="Amount"
        />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
      <p> Total Debit: {props.currDebits}</p>
      <Balance
        currCredits={props.currCredits}
        currDebits={props.currDebits}
      ></Balance>
    </div>
  );
};
export default Debits;
