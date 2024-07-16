import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './contact.scss';
import { useTheme } from '../../context/context';

export default function Contact() {
  const [message, setMessage] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
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
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>

            <Button variant="contained" className="contact__button">
              {' '}
              Send
            </Button>

            {message && <span>Thanks, I&apos;ll reply ASAP :</span>}
          </form>
        </div>
      </div>
    </div>
  );
}
