import React from 'react'

const UserCbChild = () => {
    console.log(`chilecr`)
  return (
    <div>UserCbChild</div>
  )
}

export default React.memo(UserCbChild)