import React from 'react'
import './index.css'
import Header from '../../components/Header'

function MainLayout({children}) {
  return (
    <div className='containers'>
      <Header />

      {children}
    </div>
  )
}

export default MainLayout
