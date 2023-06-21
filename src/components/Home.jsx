import Balance from "./Balance";
const Home = (props) => {
  return (
    <div className="home">
      <h1>Bank of Murica</h1>
      <Balance
        currCredits={props.currCredits}
        currDebits={props.currDebits}
      ></Balance>
      <p>Debit: {props.currDebits}</p>
      <p>Credit: {props.currCredits}</p>
    </div>
  );
};
export default Home;
