import emailjs from '@emailjs/browser';

export const sendMailWithEmailJS = async (
  serviceID,
  templateID,
  form,
  publicKey,
) => {
  const res = await emailjs.sendForm(
    serviceID,
    templateID,
    form.current,
    publicKey,
  );
};
