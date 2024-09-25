// import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import Shopping from './components/shopping'

function App() {
  const {page} = useParams()

  return (
    <>
      <Header />
      {page === 'shopping' ? (
        <Shopping />
      ): (
        <Home />
      )}
   </>
  )
}

export default App
