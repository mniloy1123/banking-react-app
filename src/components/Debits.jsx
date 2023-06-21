import Balance from "./Balance";

const Debits = (props) => {
  return (
    <div>
      <h1>Debits</h1>
      <p> Total Debit: {props.currDebits}</p>
      <Balance
        currCredits={props.currCredits}
        currDebits={props.currDebits}
      ></Balance>
    </div>
  );
};
export default Debits;
