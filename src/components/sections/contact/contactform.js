/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Modal from '../../modal/modal';

import styles from './contact.module.css';

const ContactForm = () => {
  const [modalUpdater, setModalUpdater] = useState({ key: '', open: false });
  const displayTitle = 'Kia ora!';
  const displayMessage = 'Thank you for your message! We will get back to you as quickly as possible.';

  // Track the form values in state
  const [values, setValues] = useState({});

  const handleChange = e => setValues({ ...values, [e.target.name]: e.target.value });

  // Encode the data so the form can submit it as text
  const encode = data => Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

  // Submit the form to netlify and inform the user
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        // Show the modal
        setModalUpdater({ key: `open-trigger-${Math.random()}`, open: true });
        // Disable the send button to avoid spam
        const btn = document.getElementById('contact-send');
        btn.disabled = true;
        btn.innerText = 'Sent!';
      })
      .catch(error => alert(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="/" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" onChange={handleChange} />
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
          <input type="text" name="company" id="company" onChange={handleChange} value={values.company} />
        </div>
        {/* A row for email */}
        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} value={values.email} required placeholder="This one's a must have." />
        </div>
        {/* A row for content */}
        <div className={styles.inputWrapper}>
          <label htmlFor="message">Message</label>
          <textarea name="message" className={styles.message} onChange={handleChange} value={values.message} />
        </div>
        {/* A row for a submission button */}
        <div className={styles.inputWrapper}>
          <div className={styles.submit}>
            <button className={styles.submitBtn} type="submit" id="contact-send">Send</button>
          </div>
        </div>
      </form>
      {/* Add a modal that confirms submission or informs of an error */}
      <Modal key={modalUpdater.key} isOpen={modalUpdater.open}>
        <div className={styles.dialogWrapper}>
          <div className={styles.dialogBox} data-modal-retainer>
            <h3 className={styles.dialogHeader}>{displayTitle}</h3>
            <p className={styles.dialogContent}>{displayMessage}</p>
            <btn
              id="close-submit-modal"
              onClick={() => setModalUpdater({ key: `open-trigger-${Math.random()}`, open: false })}
              onKeyPress={() => setModalUpdater({ key: `open-trigger-${Math.random()}`, open: false })}
              role="button"
              tabIndex={0}
              className={`${styles.submitBtn} ${styles.dialogButton}`}
              data-modal-retainer={false}
            >
              Okay
            </btn>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ContactForm;
