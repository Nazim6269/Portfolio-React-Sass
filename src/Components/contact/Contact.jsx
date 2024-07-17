import emailjs from '@emailjs/browser';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../../context/context';
import { publicKey, serviceID, templateID } from '../../secret';
import './contact.scss';

export default function Contact() {
  const { theme } = useTheme();
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await emailjs.send(
        serviceID,
        templateID,
        formData,
        publicKey,
      );
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: '',
      }));

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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <Button
              variant="contained"
              type="submit"
              className="contact__button"
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
