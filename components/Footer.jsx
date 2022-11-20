import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className='footer-container'>
      <p>2022 Headphones Store </p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}
