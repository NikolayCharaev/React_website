import React from 'react';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi'
import {TbFolder} from 'react-icons/tb'

const About = () => {
  return (
    <section className="about" id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_image" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <TbFolder className="about__icon" />
              <h5>Projects</h5>
              <small>90+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis beatae, amet modi ex hic fugit quas illum esse, adipisci aperiam temporibus veritatis enim a reiciendis aliquid velit obcaecati! Assumenda, praesentium.</p>
          <a href="#contact" className='btn btn-primary'>Let`s Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
