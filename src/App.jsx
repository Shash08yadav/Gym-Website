
import './App.css'
import './index.css'
import Nav from './assets/Components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './assets/Components/Footer'
import { useState } from 'react'
function App() {

  const [x,setX]=useState(null);
  const [y,setY]=useState(null);
  const setter=(i,j)=>{
    setX(i);
    setY(j);
  }
  return (
    <>
    <Nav/>
    <div className='layout'>
      <Outlet context={{x,y,setter}}/>
    </div>
    <Footer/>

    </>
  )
}

export default App
