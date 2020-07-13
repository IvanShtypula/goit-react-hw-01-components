import React from 'react';
import style from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem.js';
import friends from '../../DB/friends.json';


const FriendList = () => {
  console.log("style", style)
  return (
    <ul className={style["friend-list"]}>
        {friends.map(friend => 
          <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          />)}
    </ul>
  );
};

export default FriendList;

