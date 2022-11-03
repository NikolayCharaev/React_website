import React from 'react';
import { SlSocialVkontakte } from 'react-icons/sl';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocial;
