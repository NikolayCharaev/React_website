import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hayyabusa_01@mail.ru</h5>
            <a href="mailto:hayyabusa_01@mail.ru" target={'_blank'} rel="noreferrer">
              Send a message{' '}
            </a>
          </article>

          <article className="contact__option">
            <BsTelegram className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Telegram</h5>
            <a href="https://t.me/hayyabusa" target={'_blank'} rel="noreferrer">
              Send a message{' '}
            </a>
          </article>

          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon'/>
            <h4>Phone number</h4>
            <h5>hayyabusa_01@mail.ru</h5>
            <a href="tel:+999888777666">Call me</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form action="" onSubmit={(e) => {
          e.preventDefault()
          console.log('submit')
          // e.target.reset()
        }}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' />
          <textarea name="message"rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
