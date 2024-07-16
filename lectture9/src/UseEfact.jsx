import React, { useState } from 'react'
import LIst from './LIst'

const UseEfact = () => {

    const [message ,setmesege]= useState('');

    const handelsange=(e)=>{
        setmesege(e.target.value);
    }
  return (
    <div>
  
<input type="text" value={message} onChange={handelsange} />
<LIst logMessage={message}/>
    </div>
  )
}

export default UseEfact