import React,{useState} from 'react'

const Counter = () => {
    const [Counter,setcounter]=useState(0);

    const inc=()=>{
        setcounter(prevcounter=>prevcounter+1);
        
    }
    const dnc=()=>{
        setcounter(prevcounter=>prevcounter-1);
    }
  return (
    <div>
        <p>count:{Counter}</p>
        <button onClick={inc}>inc</button>
        <button onClick={dnc}>dnc</button>

    </div>
  )
}

export default Counter