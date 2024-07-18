import { Button } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';

const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validate = (values) => {
  const errors = {};

  if (!values.from_name) {
    errors.from_name = 'Name is Required';
  }

  if (!values.from_email) {
    errors.from_email = 'Email is Required';
  } else if (regex.test(values.from_email)) {
    errors.from_email = 'Provide a valid email';
  }

  return errors;
};

const Formik2 = () => {
  const formik = useFormik({
    initialValues: {
      from_name: '',
      from_email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className="contact__right">
        <h2>Contact</h2>
        <form onSubmit={formik.handleSubmit}>
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
        </form>
      </div>
    </>
  );
};

export default Formik2;
