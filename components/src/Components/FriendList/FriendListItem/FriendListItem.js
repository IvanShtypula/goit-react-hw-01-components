import React from 'react';
import styleItem from  './FriendListItem.module.css'
import PropTypes from 'prop-types';

const FriendListItem = ({  
  avatar,
  name,
  isOnline
}) => { 
  console.log("styleItem", styleItem) 
  return (      
    <li className={styleItem.item}>
      {isOnline ? <span className={styleItem["status-online"]}></span> : <span className={styleItem["status-offline"]}></span>}
      <img className={styleItem.avatar} src={avatar} alt={name} width="48" />
  <p className={styleItem.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
}