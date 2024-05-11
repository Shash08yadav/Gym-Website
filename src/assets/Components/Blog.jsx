import React from 'react'
import './styles/blog.css'

const Blog = () => {
  const blogs=[
    {
      img:"blog6.jpeg",
      head1:"The Science Behind Weight Loss: Understanding Calorie Deficit",
      date:"April 30, 2024",
      para:"We understand that weight loss is a complex and multidimensional process that incorporates various essential factors such as the role of metabolism, calorie deficit, and regular exercise.Certain foods such as fatty, fried, or processed foods, etc. have extra amounts of calories in them. However, some food items such as fresh vegetables and fruits provide fewer calories. ",
      butt:"Read More",
      
  },
  {
    img:"blog7.jpeg",
    head1:"The Importance Of Sleep In Fitness And Muscle Recovery: Tips For A Better Sleep Schedule",
    date:"April 23, 2024",
    para:"The importance of sleep cannot be overlooked; it plays an important role in keeping up with good health and well-being throughout our life. Getting a good sleep is essential for muscle repair & recovery, energy conservation, modulation of immune responses, brain waste clearance, and more. ",
    butt:"More",
   
}]
const blogvid=[
{
  vid:"blogvid.mp4",
  head1:" The Ideal Sequence For A Full-Body Workout Routine",
  date:"March 22, 2024",
  para:"Keeping your weight well-maintained is a real challenge, whether you are aiming to lose it or gain it. It is indeed essential to consider weight loss programs to achieve a healthy weight and feel more energetic throughout the day. Further, scientifically speaking, it reduces the chances of having major health issues. ",
  butt:"Read More",
  
},
{
  vid:"blogvid2.mp4",
  head1:"Weight Loss Programs That Really Work",
  date:"March 4, 2024",
  para:"We all want to be fit and healthy. But, have any of us wondered and stopped to think about what is the kind of complete body workout routine we need to follow for that? Embarking on a fitness journey often involves finding the right full-body workout at the gym that maximizes efficiency while targeting all major muscle groups.  ",
  butt:"Read More",
  
}
]
  return (
    <>
    <div className='membership'>
      <div className='head1'>
      <h1>Blog</h1>
      <h2>Fitnase - Blog</h2>
      </div>
    </div>
    <div className='wrapper'>
        <div className='sareblog'>  
        {blogs.map((blogg,i)=>(
          <div className='wrapper-box'>

      <div className='blogimg'>
      <img src={blogg.img} alt="here" />
      
      </div>
      <h1>{blogg.head1}</h1>
      <h2>{blogg.date}</h2>
      <div className='para'>
      <h3>{blogg.para} </h3>
      </div>
      <div className='btn'>
      <button>Read More</button>
      </div>
      </div>
      ))}
  
    </div>
    <div className='sareblog'>
    {blogvid.map((blogg,i)=>(
          <div className='wrapper-box'>

      <div className='blogimg'>
      <video src={blogg.vid} width="850px" controls autoplay muted loop></video>
      
      </div>
      <h1>{blogg.head1}</h1>
      <h2>{blogg.date}</h2>
      <div className='para'>
      <h3>{blogg.para} </h3>
      </div>
      <div className='btn'>
      <button>Read More</button>
      </div>
      </div>
      ))}

    </div>


     </div>  
    </>
  )
}

export default Blog
// The Ideal Sequence For A Full-Body Workout Routine
// Weight Loss Programs That Really Work
{/* <video src={blogg.vid} width="500px" controls autoplay muted loop></video> */}