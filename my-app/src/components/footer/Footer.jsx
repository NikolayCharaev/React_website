import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="# " className="footer__logo">
        CTHULHU
      </a>
      <ul className="permalinks">
        <li>
          <a href="# ">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href=" " target="_blank" rel="noreferrer">
          <BsTelegram />
        </a>
        <a href="https://github.com/NikolayCharaev" target="_blank" rel="noreferrer">
          <FaGithubSquare />
        </a>
        <a href="https://www.instagram.com/good_cthulhu/" target="_blank" rel="noreferrer">
          <AiFillInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; This is my website. All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
