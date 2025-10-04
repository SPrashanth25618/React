import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [cnt,setcnt] = useState(0);
  return (
    <div className="counter-container">
        <p id='para'>Clicked {cnt} times.</p>
        <div className="line">  
          <button className='btn'onClick={() => {setcnt(cnt+1)}} >Click me</button>
          <button className='btn'onClick={() => {setcnt(0)}} >Reset</button>
        </div>
    </div>
  )
}

export default Counter
