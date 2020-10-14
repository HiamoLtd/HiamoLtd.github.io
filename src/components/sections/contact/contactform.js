/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import styles from './contact.module.css';

const ContactForm = () => {
  // Track the form values in state
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handleChange = e => setValues({ ...values, [e.target.name]: e.target.value });

  // Encode the data so the form can submit it as text
  const encode = data => Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

  // Submit the form to netlify and inform the user
  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    // Attach Netlify form handling to form
    <form
      onSubmit={handleSubmit}
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      {/* A row for name and organisation */}
      <div className={styles.inputWrapper}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={values.name} />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="company" className={styles.companyLong}>
          Company / Organisation
        </label>
        <label htmlFor="company" className={styles.companyShort}>
          Company
        </label>
        <input
          type="text"
          name="company"
          id="company"
          onChange={handleChange}
          value={values.company}
        />
      </div>
      {/* A row for email */}
      <div className={styles.inputWrapper}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={values.email}
          required
          placeholder="This one's a must have."
        />
      </div>
      {/* A row for content */}
      <div className={styles.inputWrapper}>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          className={styles.message}
          onChange={handleChange}
          value={values.message}
        />
      </div>
      {/* A row for a submission button */}
      <div className={styles.inputWrapper}>
        <div className={styles.submit}>
          <input className={styles.submitBtn} type="submit" id="contact-send" value="Send" />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
