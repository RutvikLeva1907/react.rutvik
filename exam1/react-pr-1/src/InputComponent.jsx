import { useState } from "react"

// // const[]=useState("");

const InputComponent = () => {

  // const InputComponent = () => {
  //   const [stask, setstask] = useState("");
  //   const [stasklist, setstasklist] = useState("");


  // }


  // const handeletalk=(e)=>{
  //   setstasklist[e.target.value],
  //   setstask[e.target.value]

  // } 
  return (
    <div>

      <input type="text" className="input" placeholder="Enter name"/>
      <button className="button" onClick={criatingbtn}>Add</button>

    </div>
  )

}

export default InputComponent