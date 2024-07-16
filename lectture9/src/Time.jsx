import React , { useState, useEffect } from 'react'

const Time = () => {
    const [second, setsecond] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setsecond(prevsecond => prevsecond + 1);

        }, 1000);

        return()=>{
            clearInterval(interval);
        }
    },[]);
  return (
    <div>
<h2>timer</h2>
<p>time {second}</p>
    </div>
  )
}

export default Time