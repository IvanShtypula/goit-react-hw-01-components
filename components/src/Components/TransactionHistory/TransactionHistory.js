import React from 'react';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem.js';
import PropTypes from 'prop-types';
import './TransactionHistory.css'

const TransactionHistory = ({transactions}) => {
  return (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
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