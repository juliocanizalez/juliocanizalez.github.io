import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import {GrLinkedinOption, GrGithub, GrInstagram} from 'react-icons/gr'
import {BiSend} from 'react-icons/bi'
import profilePicture from '../assets/img/profile.webp'
import '../assets/styles/Home.scss'

const Home = () => {
  return (
    <>
      <Header />
      <section className="home section" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">
            <div className="home_social">
              <a href="https://www.linkedin.com/in/juliocanizalez/" target="_blank" rel="noreferrer" className="home_social-icon">
                <GrLinkedinOption />
              </a>
              <a href="https://github.com/juliocanizalez" target="_blank" rel="noreferrer" className="home_social-icon">
                <GrGithub />
              </a>
              <a href="https://www.instagram.com/juliocanizalez/" target="_blank" rel="noreferrer" className="home_social-icon">
                <GrInstagram />
              </a>
            </div>
            <div className="home_img">
              <img src={profilePicture} alt="" className="home_blob-img" />
            </div>
            <div className="home_data">
              <h1 className="home_title">Hi, I'm Julio</h1>
              <h3 className="home_subtitle">Frontend Developer</h3>
              <p className="home_description">Little description</p>
              <Link to="/contact" className="button button--flex">
                Contact Me <BiSend className="button_icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home