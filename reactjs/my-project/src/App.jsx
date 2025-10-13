// import React from 'react'

// const App = () => {
//   return (
//     <div className='bg-black'>
//       hello
//     </div>
//   )
// }

// export default App

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Products from './components/Products'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <>
      <NavBar/>
      <Products/>
      <Footer/>
      
      </>
    )
  }
}
