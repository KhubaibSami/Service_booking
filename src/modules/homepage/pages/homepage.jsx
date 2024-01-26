import React from 'react'
import About from '../components/about/about'
import Card from '../components/card/card'
import Qoutes from '../components/qoute/qoutes'
import Video from '../components/video/video'

const Homepage = () => {
  return (
    <>
    <Video />
      <About />
      <Card />
      <Qoutes />
    </>
  )
}

export default Homepage
