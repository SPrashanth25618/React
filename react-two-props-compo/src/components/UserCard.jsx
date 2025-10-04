import React from 'react'
import p1 from '../assets/p3.jpg'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='Container' style={props.style}>
      <p id="user-name">{props.name}</p>
      <img src={props.image} alt="Prashanth" id="user-img" />
      <p id="user-desc">{props.desc}</p>
    </div>
  )
}

export default UserCard
