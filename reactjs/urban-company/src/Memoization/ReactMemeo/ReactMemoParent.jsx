import React from 'react'
import { useState } from 'react'
import ReactMemoChild from './ReactMemoChild'

const ReactMemoParent = () => {
    let [state,setState]= useState(0)
  return (
    <>
    <div>ReactMemoParent</div>

    <h1>Count: {state}</h1>
    <button onClick={()=>{
        setState(state+1)
    }}>Increment</button>
    

    <ReactMemoChild/>
    </>
  )
}

export default ReactMemoParent