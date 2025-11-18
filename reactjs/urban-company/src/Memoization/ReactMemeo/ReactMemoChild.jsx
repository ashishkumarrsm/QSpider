import React from 'react'

const ReactMemoChild = () => {



    console.log(`this is the example of the rerendring or react.memo`)
  return (


    <div>ReactMemoChild</div>
  )
}

export default React.memo(ReactMemoChild)
// export default ReactMemoChild