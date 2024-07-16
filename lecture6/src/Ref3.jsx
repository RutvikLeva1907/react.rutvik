import React, { useEffect, useRef } from 'react'

const Ref3 = () => {


    const inputRef = useRef(null);

    useEffect = (() => {

        // inputRef.current.focus();
        inputRef.current.focus();
    }, []);
    return (
        <div>

            <input type="text" ref={inputRef} placeholder='enter enithink' />
        </div>
    )
};


export default Ref3

