import React from 'react'
import Header from '../components/Header'
import profilePicture from '../assets/img/profile.webp'

const About = () => {
  return (
    <>
      <Header />
      <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section subtitle">My introduction</span>

        <div className="about_container container grid">
          <img src={profilePicture} alt="" className="about_i" />
        
          <div className="about_data">
            <p className="about_description"></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About