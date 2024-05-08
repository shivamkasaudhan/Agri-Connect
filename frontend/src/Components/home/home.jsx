import React, { useContext } from 'react'
import Layout from '../layout/layout'
import HeroSection from '../hero section/heroSection'
import Feature from '../feature/Feature'
import LatestBlog from '../blog window/LatestBlog'
import { Link } from 'react-router-dom'
import Testimonial from '../testimonials/Testimonial'


function Home() {
  return (
    <Layout>
      <HeroSection />
      <Feature/>
      <LatestBlog/>
      <Testimonial/>
    </Layout>
  )
}

export default Home