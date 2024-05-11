import React, { useEffect, useState } from 'react'
import './styles/register.css'
import { useOutletContext } from 'react-router-dom'
const Contact = () => {
  const [inpu,setInpu]=useState(true);
  const [packSelected, setPackSelected] = useState({
    pack: "Silver",
    amount: "FREE"
  });
  const packPrice = {
    "Silver" : "FREE",
    "Gold" : "$ 800",
    "Diamond": "$ 1500"
  }
  const hchange=(e)=>{
    let pack = e.target.value;
    setPackSelected({pack, amount : packPrice[pack]})
  }
  // from membership 
  const {x,y}= useOutletContext();
  useEffect(()=>{
    if(x != null && y != null){
      setPackSelected({pack : y, amount : x})
      console.table([x, y])
      setInpu(false)
    }
  }, [x, y])
  return (
    <>
    <div className='membership'>
      <div className='head1'>
      <h1>USER REGISTRATION</h1>
      <h2>Fitnase - Registration</h2>
      </div>
    </div>
      <div className='register'>
      <form>
      <div className='registerbox'>
      <h1>User Information</h1>
      <div className='labels'>
      <label htmlFor="fname">User Name*</label>
      <input type="text" id="fname" name="fname" placeholder='Enter User Name'></input></div>
      <div className='labels'>
      <label htmlFor="email">Enter email*</label>
      <input type="email" id="email" name="email" placeholder='Enter Email Address'></input></div>
      <div className='labels'>
      <label htmlFor="pwd"> Password *   </label>
      <input type="password" id="pwd" name="pwd" placeholder=''></input></div>
      <h1>Payment Info</h1>

      <div className='labels'>
      <label htmlFor="cars">Package </label>
      {inpu ? <select onChange={hchange} name="pakage" defaultValue={packSelected}>
    <option value="Silver" >Silver</option>
    <option value="Gold">Gold</option>
    <option value="Diamond">Diamond</option>
    </select> : <input type="text" value={packSelected.pack} readOnly /> }
    </div>
    <div className='labels'>
    <label htmlFor="cars">Amount:</label>
    <input type="string" value={packSelected.amount} readOnly/>
    </div>

    <div className='check'>
    <input type="checkbox"  name="conditions" ></input>
    <label htmlFor="conditions"> I have read & accept all conditions</label>
    </div>
    <div className='finalise'> 
     <button>Submit</button>
    </div>
   
  
    </div>
    </form>
    </div>
    </>
  )

   
}

export default Contact