import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineBook } from 'react-icons/ai';
import { RiHeartPulseFill } from 'react-icons/ri';
import { BiMessageSquareDots } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className="nav">
      <a
        href="# "
        className={activeNav === '# ' ? 'active' : ''}
        onClick={() => {
          setActiveNav('# ');
        }}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav('#about');
        }}
        className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setActiveNav('#experience');
        }}
        className={activeNav === '#experience' ? 'active' : ''}>
        <AiOutlineBook />
      </a>
      <a
        href="#services"
        onClick={() => {
          setActiveNav('#services');
        }}
        className={activeNav === '#services' ? 'active' : ''}>
        <RiHeartPulseFill />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav('#contact');
        }}
        className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDots />
      </a>
    </nav>
  );
};

export default Nav;
