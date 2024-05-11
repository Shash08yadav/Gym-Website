import React from 'react'
import Locationgym from '../utils/Locationgym'
import './styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='footerbox'>
      <div className='services'>
        <h1>Services </h1>

        <h2>Basic Workout</h2>
        <h2>Yoga</h2>
        <h2>Body Building</h2>
        <h2>Newly</h2>
        <div className='social'>
          <h1>Social Medaia</h1>
          <div className='socialmed'>
       <a href='https://www.facebook.com/share/b44dwpxLmN46kQ2t/?mibextid=qi2Omg'><FontAwesomeIcon icon={fab.faFacebook} /></a> 
        <FontAwesomeIcon icon={fab.faInstagram} />
        <FontAwesomeIcon icon={fab.faTwitter} />
        </div>
        </div>
      </div>
      <div className='company'>
       <div className='locate'>
        <Locationgym/>
       </div>
      </div>
      <div className='address'>
        <h1>Address</h1>
        <h2>Ground Floor, 203 C, Mahatma Gandhi Rd, Mukunda Das Pally, Daspara, Thakurpukur, Kolkata, West Bengal 700063</h2>
        <h3>Contact: 9166239672</h3>
      </div>
      </div>
      <div className='desby'>
    <h1>Website Design By Shashwat Yadav</h1>
    </div>
    </div></>
  )
}

export default Footer