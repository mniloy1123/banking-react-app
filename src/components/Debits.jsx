import { useState } from "react";
import Balance from "./Balance";
//prettier-ignore
import { Card, CardHeader, Heading, Input, Box, Button, Text } from "@chakra-ui/react";

const Debits = (props) => {
  const [description, setDescription] = useState("");
  const [debitAmount, setDebitAmount] = useState("");
  const [error, setError] = useState(null);
  const [entries, setEntries] = useState([]);

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
      setEntries([...entries, { description, debitAmount, date: new Date() }]);
      setDescription("");
      setDebitAmount("");
    }
  };
  return (
    <div>
      <Card className="contentCard">
        <CardHeader>
          <Heading size="lg">Debit</Heading>
        </CardHeader>
        <p>Both Required:</p>
        <Box mt={4}></Box>
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
            value={debitAmount}
            onChange={handleDebitAmountChange}
            placeholder="Amount"
          />
          <Box mt={4}></Box>
          <Button type="submit" value="Submit" colorScheme="blue">
            Submit
          </Button>
          {error && <p>{error}</p>}
        </form>
        <Box mt={4}></Box>
        <p> Total Debit: {props.currDebits}</p>
        <Box mt={4}></Box>
        <Balance
          currCredits={props.currCredits}
          currDebits={props.currDebits}
        ></Balance>
        {entries.map((entry, index) => (
          <Card key={index}>
            <Box mt={2}></Box>
            <Text>Description: {entry.description}</Text>
            <Text>Amount: {entry.debitAmount}</Text>
            <Text>Date: {entry.date.toLocaleDateString()}</Text>
            <Box mt={2}></Box>
          </Card>
        ))}
      </Card>
    </div>
  );
};
export default Debits;
