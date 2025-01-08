import React, { useRef } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef(null); // Ensure form is referenced correctly

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Form data:", form.current); // Log form data for debugging

    emailjs
      .sendForm(
        'service_ugjtork', // Replace with your actual Service ID
        'template_folmmue', // Replace with your actual Template ID
        form.current,
        'baOPuoKOuuod7UbkT' // Replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS:', result.text);
        },
        (error) => {
          console.error('FAILED:', error); // Log detailed error
        }
      );
  };

  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the below form to discuss any work opportunities
        </span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
