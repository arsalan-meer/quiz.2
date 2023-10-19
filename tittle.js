// src/components/ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <div>{expense.title}</div>
            <div>{expense.date}</div>
            <div>${expense.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
