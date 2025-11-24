import React from 'react'
import Header from '../Core/Header'

const Home = ({Children, pages}) => {
  return (
    <>
     <Header Children={Children} pages={pages} />
    </>
  )
}

export default Home