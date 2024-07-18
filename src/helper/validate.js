const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validate = (values) => {
  const errors = {};

  if (!values.from_name) {
    errors.from_name = 'Name is Required';
  }

  if (!values.from_email) {
    errors.from_email = 'Email is Required';
  }

  if (!regex.test(values.from_email)) {
    errors.from_email = 'Provide a valid email';
  }

  if (!values.message) {
    errors.message = 'Provide a message';
  }

  return errors;
};
