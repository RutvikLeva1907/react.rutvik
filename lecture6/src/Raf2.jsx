import React, { useState ,useRef } from 'react'

const Raf2 = () => {
    const [inputvalue, setinputvalue] = useState('');
    const inputref = useRef(null);

    const handelinput = () => {
 
   const value= inputref.current.value ;
   setinputvalue(value)
    }
    return (
        <div>
            <input type="text"onChange={handelinput } ref={inputref} />

            <p>input:{inputvalue}</p>

        </div>
    )
}

export default Raf2