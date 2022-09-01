import React from 'react'
import CountingCard from './HomeComponents/CountingCard'
import CourseCard from './HomeComponents/CourseCard'
import FirstSection from './HomeComponents/FirstSection'
import Testimonial from './HomeComponents/Testimonial'

function Home() {
  return (
    <div>
        <FirstSection/>
        <CountingCard/>
        <CourseCard/>
        <Testimonial/>
    </div>
  )
}

export default Home