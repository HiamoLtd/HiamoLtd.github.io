import React from 'react';

import styles from './contact.module.css';

const ContactForm = () => (
  // Attach Netlify form handling to form
  <form method="post"
    netlify-honeypot="bot-field"
    data-netlify="true">
    <input type="hidden" name="bot-field"/>
    {/*A row for name and organisation*/}
    <div className={styles.inputWrapper}>
      <label htmlFor="name" className={styles.label}>
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className={styles.input}
      />
    </div>
    <div className={styles.inputWrapper}>
      <label htmlFor="company" className={styles.label}>
        Company / Organisation
      </label>
      <input
        type="text"
        name="company"
        id="company"
        className={styles.input}
      />
    </div>
    {/*A row for email*/}
    <div className={styles.inputWrapper}>
      <label htmlFor="email" className={styles.label}>
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="This one's a must have."
        required
        className={styles.input}
      />
    </div>
    {/*A row for content*/}
    <div className={styles.inputWrapper}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          name="message"
          className={styles.message}
        />
    </div>
    {/*A row for a submission button*/}
    <div className={styles.inputWrapper}>
      <div className={styles.submit}>
        <input
          className={styles.submitBtn}
          type="submit"
          id="contact-send"
          value="Send"
        />
      </div>
    </div>
  </form>
)

export default ContactForm;
