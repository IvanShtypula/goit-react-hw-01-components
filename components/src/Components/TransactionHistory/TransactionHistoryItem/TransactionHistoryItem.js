import React from 'react';
import styleTrnEl from './TransactionHistoryItem.module.css'

const TransactionHistoryItem = (
 { type,
  amount,
  currency}
) => {  
  return (
  <tr className={styleTrnEl["table-row"]}>
    <td className={styleTrnEl["table-data"]}>{type}</td>
    <td className={styleTrnEl["table-data"]}>{amount}</td>
    <td className={styleTrnEl["table-data"]}>{currency}</td>
  </tr>
  );
};

export default TransactionHistoryItem;