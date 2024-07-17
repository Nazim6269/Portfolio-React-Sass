import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTheme } from '../../context/context';
import { sendMailWithEmailJS } from '../../helper/sendMailWithEmailJS';
import { publicKey, serviceID, templateID } from '../../secret';
import './contact.scss';

export default function Contact() {
  const { theme } = useTheme();
  const [message, setMessage] = useState('');
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendMailWithEmailJS(serviceID, templateID, form, publicKey);
      setMessage('Message sent successfully');
    } catch (error) {
      alert('Failed to send message, please try again later');
    }
  };

  return (
    <div className={`contact ${theme}`} id="contact">
      <h1>Get Contact</h1>
      <div className="contact__wrapper">
        <div className="contact__left">
          <motion.img
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: 'linear',
            }}
            src="reactNoBackground.png"
            alt=""
          />
        </div>
        <div className="contact__right">
          <h2>Contact</h2>
          <form ref={form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" name="from_name" />
            <input type="email" placeholder="Your Email" name="from_email" />
            <textarea placeholder="Message" name="message" />

            <Button
              variant="contained"
              type="submit"
              className="contact__button"
              value="Send"
            >
              {' '}
              Send
            </Button>

            {message && <span>{message}</span>}
          </form>
        </div>
      </div>
    </div>
  );
}
