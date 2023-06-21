import Balance from "./Balance";
import { Card, CardHeader, Heading } from "@chakra-ui/react";
const Home = (props) => {
  return (
    <div className="home">
      <Card className="contentCard">
        <CardHeader>
          <Heading size="lg">Bank of Murica</Heading>
        </CardHeader>
        <Balance
          currCredits={props.currCredits}
          currDebits={props.currDebits}
        ></Balance>
        <p>Debit: {props.currDebits}</p>
        <p>Credit: {props.currCredits}</p>
      </Card>
    </div>
  );
};
export default Home;
