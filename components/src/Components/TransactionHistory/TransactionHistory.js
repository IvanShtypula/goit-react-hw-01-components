import React from 'react';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem.js';
import PropTypes from 'prop-types';
import styleTrn from './TransactionHistory.module.css';

const TransactionHistory = ({transactions}) => {
  return (
    <table className={styleTrn["transaction-history"]}>
  <thead>
    <tr className={styleTrn["table-row"]}>
      <th className={styleTrn["table-header"]}>Type</th>
      <th className={styleTrn["table-header"]}>Amount</th>
      <th className={styleTrn["table-header"]}>Currency</th>
    </tr>
  </thead>

  <tbody>
  {transactions.map((transaction) => (
    <TransactionHistoryItem
      key={transaction.id}
      type={transaction.type}
      amount={transaction.amount}
      currency={transaction.currency}
    />
  ))}
  </tbody>
  </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string
    })
  ).isRequired,
}