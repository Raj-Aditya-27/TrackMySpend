import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.jsx";
import Transaction from "./Transaction.jsx";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} Transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
