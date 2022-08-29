/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import PageLayout from "../../layouts/PageLayout";
import ContactForm from "./ContactForm/ContactForm";

function Contact() {
  return (
    <PageLayout>
      {/* Location */}
      <div className="h-full min-h-[300px]">
        <iframe
          style={{ width: "100%", height: "100%", minHeight: "500px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.5239599486977!2d91.82790081422624!3d22.333836447322092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a842bd40ad%3A0xb5a685e4e6129d80!2sChittagong%20Railway%20Staion%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1661600276225!5m2!1sen!2sbd"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>

      <ContactForm></ContactForm>
    </PageLayout>
  );
}

export default Contact;
