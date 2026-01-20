import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.userName},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis animi fugiat expedita harum commodi est dicta aperiam modi alias veniam earum, reprehenderit ad odio perferendis.</p>
        <button>view profile</button>
      </div>
    </div>
  )
}

export default Card
