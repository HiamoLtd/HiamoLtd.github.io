/* eslint-disable jsx-a11y/label-has-associated-control */
// TODO fix above
import React from 'react';

import styles from './contact.module.css';

// TODO need a confirmation for the user. Maybe contact form shouldnt reset page?
const ContactForm = () => (
  // Attach Netlify form handling to form
  <form method="post" netlify-honeypot="bot-field" data-netlify="true">
    <input type="hidden" name="bot-field" />
    {/* A row for name and organisation */}
    <div className={styles.inputWrapper}>
      <label htmlFor="name">
        Name
      </label>
      <input type="text" name="name" id="name" />
    </div>
    <div className={styles.inputWrapper}>
      <label htmlFor="company" className={styles.companyLong}>
        Company / Organisation
      </label>
      <label htmlFor="company" className={styles.companyShort}>
        Company
      </label>
      <input type="text" name="company" id="company" />
    </div>
    {/* A row for email */}
    <div className={styles.inputWrapper}>
      <label htmlFor="email">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="This one's a must have."
        required
      />
    </div>
    {/* A row for content */}
    <div className={styles.inputWrapper}>
      <label htmlFor="message">
        Message
      </label>
      <textarea name="message" className={styles.message} />
    </div>
    {/* A row for a submission button */}
    <div className={styles.inputWrapper}>
      <div className={styles.submit}>
        <input className={styles.submitBtn} type="submit" id="contact-send" value="Send" />
      </div>
    </div>
  </form>
);

export default ContactForm;
