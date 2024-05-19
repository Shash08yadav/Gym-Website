import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import pic2 from '../../../public/pic2.jpeg'
import pic3 from '../../../public/pic3.jpeg'
import pic4 from '../../../public/pic4.jpeg'

import './styles/background.css'
const Background = () => {

  const pp = [pic2,pic3,pic4];
    const [n,setN] = useState(0);
    const [imgg,setImgg]= useState(pp[n]);

    useEffect(()=>{
      setImgg(pp[n]);
    },[n])

    const changeImgl=()=>{
      if(n===0){
      setN(pp.length-1);
      console.log(n)
    }
    else {
      setN(n-1);
    }
    }
    const changeImgr=()=>{
      if(n===(pp.length-1)){
        console.log(n);
        setN(0);
      }
      else {
        setN(n+1);
      }
    }
  return (
    <>
  
    <div className='photo' style={{
       backgroundImage: `url("gymdp.jpg")`
    }}>
         <div className='quote'>
            <h1>Once you are exercising regularly, the hardest thing is to stop it.</h1>
            
            <div className='but'>
              <Link to="Registration"><button className="join">Become A Member</button></Link></div>
         </div>
    </div>
    {/* yaha se hamare program hai */}
    <div className='program'>
      <div className='head'>
      <Link className="list1"to="Membership"><h1>Our Plan</h1></Link>
      <h2>What We Can Offer</h2>
     </div>
    <div className='img-box'>
      <div className='upl'>
      <img src="yoga.jpeg" alt="here" />
      <h1>Yoga</h1> </div>
      <div className='upl2'>
      <img src='bodybuil.jpeg' alt='here'/>
      <h1>Body Building</h1>
      </div>
      <div className='lower'>
      <img src="basic.jpg" alt="here" />
      <h1>Basic Workout</h1>
      </div>
      <div className='lower2'>
      <img src="newgym.avif" alt="here" />
      <h1>Newly</h1>
      </div>
    </div>
    </div>
    {/* yaha se ek form section hai */}
    <div className='justwrite'>
      <div className='fill'>
        <h1>Send A Message</h1>
        <input type='text' placeholder='Name*'></input>
        <input type="email" id="email" name="email" placeholder='Email*'></input>
        <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Enter Message Here'></textarea>
        <button>Submit Now</button>
      </div>

      <div className='callbox' style={{
        backgroundImage: `url(logofill.webp)`
      }}>
      <h1>Make a call for any type of query.</h1>
      <img src='call.png'></img>
      <h2>+9166239672</h2>
      </div>
    </div>
    {/* yaha se appointmenty section hai */}
    <div className='galsec' style={{
       backgroundImage:`1url("appointment.jpeg")`
    }}>
      <div className='appoint'>
        <h1>REGISTRATION NOW TO GET MORE DEALS</h1>
        <h2>WHERE HEALTH, BEAUTY AND FITNESS MEET.</h2>
        <Link to="Registration"><button>APPOINTMENT</button></Link>
        
      </div>
    </div>
    {/* </div> */}
    
    </>
  )
}

export default Background