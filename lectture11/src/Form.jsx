import React, { useState } from 'react'

const Form = () => {
    let [user, setuser] = useState({
        name: "",
        password: ""
    })

    const handelchange = (event) => {
        let { name, value } = event.target;
        setuser({ ...user, [name]: value });

    }
    // console.log(user);
    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(user);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="name"
                    value={user.name}
                    onChange={handelchange}
                    placeholder='eter your name' />
                <input type="text"
                    name="password"
                    value={user.password}
                    onChange={handelchange}
                    placeholder='enter your password' />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form

