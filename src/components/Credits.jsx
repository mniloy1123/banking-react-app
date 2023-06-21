import Balance from "./Balance";

const Credits = (props) => {
  return (
    <div>
      <h1>Credits</h1>
      <p> Total Credit: {props.currCredits}</p>
      <Balance
        currCredits={props.currCredits}
        currDebits={props.currDebits}
      ></Balance>
    </div>
  );
};
export default Credits;
