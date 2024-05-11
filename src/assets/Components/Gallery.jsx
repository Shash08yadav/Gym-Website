import React, { useState } from 'react'
import './styles/gallery.css'

const Gallery = () => {
  const [file,setFile]=useState(null);
  const gal=[{
    id:"1",
    imge:"photos/photos1.webp"
  },
  {
    id:"2",
    imge:"photos/photos2.jpeg"
  },
  {
    
      id:"3",
      imge:"photos/photos3.webp"
    
  },
  {
    id:"4",
    imge:"photos/photos4.webp"
  },
  {
    id:"5",
    imge:"photos/photos5.jpeg"
  },
  {
    id:"6",
    imge:"photos/photos6.webp"
  }
]
const vid=[
  {
    id:"1",
    // poster:"",
    videos:"vid1.mp4"
},
{
  id:"2",
  // poster:"",
  videos:"vid2.mp4"
},
{
  id:"3",
  // poster:"",
  videos:"vid3.mp4"
}
]
  return (
  <>
  <div className='wrap1'>
    <div className='wrapimage'>
      <h1 className='h'>Photos</h1>
      </div>
      <div className='wrap'>
      {  gal.map((gall,i)=>(
      <div className='img-container'><img src={gall.imge} alt="here" /></div>
    ))
    }
      </div>
   <div className='videobox'>
    <h1 className='videohead'>Video</h1>
    <div className='video-cont'>
      {
        vid.map((file,i)=>(
          <div className='video' onClick={()=> setFile(file)}><video src={file.videos} width="500px" controls autoplay muted loop></video></div>
  
        ))
      }
   </div>
   </div>
  
  {/* <div className='popup-media'>
    <span>&times;</span>
    {

    }
  </div> */}
  </div>
  </>
  )
}

export default Gallery
{/* <div className='video'><video src='vid1.mp4' width="500px" controls autoplay muted loop></video></div>
    <div className='video'><video src='vid2.mp4' width="500px" controls autoplay muted loop></video></div>
    <div className='video'><video src='vid3.mp4' width="500px" controls autoplay muted loop></video></div> */}