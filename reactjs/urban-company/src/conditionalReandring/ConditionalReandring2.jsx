import React, { useState } from 'react'

const ConditionalReandring2 = () => {
  let [mode,setMode]=useState('b')

  switch (mode) {
    case "a":
        return(
            <>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum eligendi alias nisi adipisci recusandae, perspiciatis nulla tempora quod mollitia cumque sapiente labore!</h1>
            </>
        )
        
    default:
        return(<>
        <h2>lottrm</h2>
        </>)
  }



}

export default ConditionalReandring2
