import { useState,useRef } from 'react'
import './App.css'

function App() {
  const [cnt,setcnt] = useState(0);
  let id = useRef(null);
  let h3ref = useRef(null);
  function Starttimeer(){
    id.current = setInterval(() => {
      id = setcnt(cnt => cnt+1);
    },1000);
  }
  function Stoptimeer(){
    clearInterval(id.current);
    id.current = null;
  }
  function Resettimer(){
    setcnt(0);
  }
  function dosomething(){
    h3ref.current.style.color = h3ref.current.style.color === "green"?"White":"green";
  }
  return (
    <div className="App">
      <h1>StopWatch : {cnt} Seconds</h1>
      <h3 ref={h3ref} onClick={dosomething}>Hello this is gone a change its color</h3>
      <button onClick={Starttimeer}>Start</button>            
      <button onClick={Stoptimeer}>Stop</button>
      <button onClick={Resettimer}>reset</button>
    </div>
  )
}

export default App
