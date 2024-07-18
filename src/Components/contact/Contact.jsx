import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTheme } from '../../context/context';
import { sendMailWithEmailJS } from '../../helper/sendMailWithEmailJS';
import { validate } from '../../helper/validate';
import { publicKey, serviceID, templateID } from '../../secret';
import './contact.scss';

export default function Contact() {
  const { theme } = useTheme();
  const [message, setMessage] = useState('');
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      from_name: '',
      from_email: '',
      message: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //handle submit function
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
            <input
              type="text"
              placeholder="Your Name"
              name="from_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.from_name}
            />
            {formik.touched.from_name && formik.errors.from_name ? (
              <div>{formik.errors.from_name}</div>
            ) : null}

            <input
              type="email"
              placeholder="Your Email"
              name="from_email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.from_email}
            />
            {formik.touched.from_email && formik.errors.from_email ? (
              <div>{formik.errors.from_email}</div>
            ) : null}

            <textarea
              placeholder="Message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <div>{formik.errors.message}</div>
            ) : null}

            <Button
              variant="contained"
              type="submit"
              className="contact__button"
              value="Send"
              disabled={
                (formik.errors.from_name &&
                  formik.errors.from_email &&
                  formik.errors.message) ||
                (!formik.values.from_email &&
                  !formik.values.from_name &&
                  !formik.values.message)
              }
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
