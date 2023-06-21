import { useState } from "react";
import Balance from "./Balance";
import {
  Card,
  CardHeader,
  Heading,
  Input,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";

const Credits = (props) => {
  const [description, setDescription] = useState("");
  const [creditAmount, setCreditAmount] = useState("");
  const [error, setError] = useState(null);
  const [entries, setEntries] = useState([]);

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
      setEntries([...entries, { description, creditAmount, date: new Date() }]);
      setDescription("");
      setCreditAmount("");
    }
  };

  return (
    <div>
      <Card className="contentCard">
        <CardHeader>
          <Heading size="lg">Credit</Heading>
        </CardHeader>
        <p>Both Required:</p>
        <form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Description"
          />
          <Box mt={4}></Box>
          <Input
            type={"text"}
            value={creditAmount}
            onChange={handleCreditAmountChange}
            placeholder="Amount"
          />
          <Box mt={4}></Box>
          <Button type="submit" value="Submit" colorScheme="blue">
            Submit
          </Button>
          {error && <p>{error}</p>}
        </form>
        <Box mt={4}></Box>
        <p> Total Credit: {props.currCredits}</p>
        <Balance
          currCredits={props.currCredits}
          currDebits={props.currDebits}
        ></Balance>
        {entries.map((entry, index) => (
          <Card key={index}>
            <Box mt={2}></Box>
            <Text>Description: {entry.description}</Text>
            <Text>Amount: {entry.creditAmount}</Text>
            <Text>Date: {entry.date.toLocaleDateString()}</Text>
            <Box mt={2}></Box>
          </Card>
        ))}
      </Card>
    </div>
  );
};

export default Credits;
