import React, { useState } from 'react'
import './styles/membership.css'
import {Link} from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
const Membership = () => {
  const {setter} = useOutletContext();
  const packages=[
    {
      title:"Silver",
      head1:"Free",
      head2:"For a week",
      posFeatures: [
        " 5 Days in a Week",
        "01 Sweatshirt",
        "  01 Bottle Of Protein",
        "  Acces to Videos",
      ],
      negFeatures: [
          "Weight Lifting",
          "Musle Stretching"
        ],
        register:"get Started now"
        
      
    },
    {
      title:"Gold",
      head1:"$ 800",
      head2:"For one Month",
      posFeatures: [
        " 5 Days in a Week",
        "  01 Sweatshirt",
        "  01 Bottle Of Protein",
        "  Acces to Videos",
        "Weight Lifting"
      ],
      negFeatures:[
        "Musle Stretching"
      ],
      register:"get Started now"
    },
    {
      title:"Diamond",
      head1:"$ 1500",
      head2:"For a Year",
      posFeatures: [
        "5 Days in a Week",
        " 01 Sweatshirt",
        "01 Bottle Of Protein",
        " Acces to Videos",
        "Weight Lifting",
        "Musle Stretching"
      ],
      negFeatures : [],
      register:"get Started now"
    },

  ]


  return (
    <>
    <div className='membership' style={{
      backgroundImage: `url(membership4.webp)`
    }}>
      <div className='head1'>
      <h1>Membership</h1>
      <h2>Fitnase - Membership</h2>
      </div>
    </div>
    <div className='membershipbox'>
   
    <div className='uphead'>
      <h2>Pricing Plan</h2>
      <h1>OUR PRICE & PLANNING</h1>
    </div>
    <div className='package'>
    {
        packages.map((pack,i)=>(
          <div key={i} className='silver'>
          <h1 className='silh1'>{pack.title}</h1>
         
            <div className='lining'>
            <div className='free'>
              <h1>{pack.head1}</h1>
              <h2>{pack.head2}</h2>
            </div>
            </div>
            <div className='given'>
             {
             pack.posFeatures.map((pf, i)=>(
              <h2 key={i}>+ {pf}</h2>
              
             ))
             }   
             {
              pack.negFeatures.map((nf,i)=>(
                <h2 key={i}>- {nf}</h2>
               ))
             }
            </div>
            <div className='start'>
             <Link to="Registration">
          <button onClick={()=>setter(pack.head1, pack.title) }>Get Started Now</button>
          </Link>
            
        </div>
            </div>
        ))
      }
     
      

    </div>
    </div>
    </>
  )
}

export default Membership