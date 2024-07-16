import React, { useEffect } from 'react'

const LIst = ({logMessage}) => {

    useEffect(()=>{
        console.log();
    })
    useEffect(()=>{
        console.log(`prop chang "${logMessage}"`);
    },[logMessage])

  return (
    <div>
<li>Prop changes (logMessage): logs "Prop changed  [logMessage]"</li>
    </div>
  )
}

export default LIst