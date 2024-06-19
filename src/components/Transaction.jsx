import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.jsx";

const Transaction = ({ Transaction }) => {
  const sign = Transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <li className={Transaction.amount < 0 ? "minus" : "plus"}>
        {Transaction.text}{" "}
        <span>
          {sign}
          {Math.abs(Transaction.amount)}
        </span>
        <button onClick={()=>deleteTransaction(Transaction.id)} className="delete-btn">x</button>
      </li>
    </div>
  );
};

export default Transaction;
