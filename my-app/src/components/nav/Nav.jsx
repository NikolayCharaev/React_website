import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {RiHeartPulseFill} from 'react-icons/ri'
import {BiMessageSquareDots} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav className="nav">
        <a href="# " className='active'><AiOutlineHome/></a>
        <a href="#about"><AiOutlineUser/></a>
        <a href="#experience"><AiOutlineBook/></a>
        <a href="#services"><RiHeartPulseFill/></a>
        <a href="#contact"><BiMessageSquareDots/></a>
    </nav>
  )
}

export default Nav
