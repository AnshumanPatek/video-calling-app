import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const HomePage = () => {
const [input,setInput] = useState("");
const navigate = useNavigate();
const SubmitHandler=()=>{
    navigate(`/room/${input}`);
}
  return (
    <div>
        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter your name...'/>
            <button onClick={SubmitHandler}>Join</button>
        </div>
    </div>
  )
}

export default HomePage