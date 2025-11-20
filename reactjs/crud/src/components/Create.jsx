import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    let [value, setValue] = useState({
        name : "",
        email : "",
        phone : ""
    })

    let navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        axios.post("http://localhost:3030/users",value)
        .then(res=>{
            console.log(res)
            navigate("/")
        }).catch(err=>console.log(err))
    }

    console.log(value)

  return (
    <div>
      <h1>Add Users</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name ' name='name' onChange={(e)=>setValue({...value, name : e.target.value})} />
        </div>
        <div>
            <label htmlFor="">Email</label>
            <input type="text" name="email" onChange={(e)=>setValue({...value, email : e.target.value})} />
        </div>
        <div>
            <label htmlFor="">Phone</label>
            <input type="text" name="phone" onChange={(e)=>setValue({...value, phone : e.target.value})}/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Create
