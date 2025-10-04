/*
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react'

function createConnection(serverurl,roomid) {
  return {
    connect : () => console.log(`Connecting to ${serverurl} in room ${roomid}`),
    disconnect : () => console.log(`Disconnecting from ${serverurl} in room ${roomid}`),
  }
}

function StudyRoom({roomid}) {
  const [serverurl,setserverurl] = useState('ws://localhost:4000');
  useEffect(() => {
    const connection = createConnection(serverurl,roomid);
    connection.connect();
    return () =>{
      connection.disconnect();
    };
  },[roomid,serverurl]);
  return (
    <div>
      <label htmlFor="">
        Server URL:{' '}
        <input type="text" value={serverurl} onChange={(e) => setserverurl(e.target.value)} />
      </label>
      <h1>Welcome to the {roomid} room!</h1>
    </div>
  );
}

const App = () => {
  const [roomid,setroomid] = useState('general');
  const [show,setShow] = useState(false);

  return (
    <div>
      <label htmlFor="">
        Choose your studying room:{' '}
        <select value={roomid} onChange={(e)=> setroomid(e.target.value)}>
          <option value="general">General</option>
          <option value="study">Study</option>
          <option value="libray">Libray</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)} style={{'margin' : '10px'}} >
        {show ? 'Leave Room' : 'Join Room'}
      </button>
      {show && <hr />}
      {show && <StudyRoom roomid = {roomid}/>}
    </div>
  )
}

export default App
*/
import React, { useEffect } from 'react'
import { useState } from 'react';

/*
const Timer = () =>{
  const [count,setCount] = useState(0);
  useEffect(()=>{
      const t = setInterval(()=>{setCount(cnt => cnt+1)},1000);
      return () => clearInterval(t);
    },[]);
  return(
    <div>
      <h1>Timer : {count} </h1>
    </div>
  )
}
*/


const App = () => {
  return (
    <div>
      <h1>Hello Man!</h1>
      {/* <Timer /> */}
    </div>
  )
}

export default App
