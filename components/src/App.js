import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile.js';
import user from './DB/user.json'
import Statistics from './Components/Statistics/Statistics.js'
import statisticalData from './DB/statistical-data.json';
import friends from './DB/friends.json';
import FriendList from './Components/FriendList/FriendList.js';
import TransactionHistory  from './Components/TransactionHistory/TransactionHistory.js';
import transactions from './DB/transactions.json';


function App() {
  return (
    <div className="App">
      <Profile
       name={user.name}
       tag={user.tag}
       location={user.location}
       avatar={user.avatar}
       stats={user.stats}
       />

      <Statistics
       title="Upload stats" stats={statisticalData}
      />

      <FriendList
       friends={friends}
      />

      <TransactionHistory transactions={transactions}/>
    </div>
  );
}

export default App;
