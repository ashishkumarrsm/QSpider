import React from 'react'
import C2 from './C2'

const C1 = (props ) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>


      <C2 class='mca' age='23'/>
    </div>
  )
}

export default C1

