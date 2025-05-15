import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Characters from './components/Characters'
import Arena from './components/Arena'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      {/* header section */}
      <Header />
      {/* hero section */}
      <Hero />
      {/* characters section */}
      <Characters />
      {/* benito card section */}
      <Arena />
      {/* footer section */}
      <Footer />
      </div>
  )
}

export default App