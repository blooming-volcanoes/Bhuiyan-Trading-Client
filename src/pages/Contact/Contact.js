/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import ContactForm from "./ContactForm/ContactForm";

function Contact() {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    let isMuted = true;
    const height = document.getElementById("location_map").offsetHeight;
    if (searchParams.get("name")) {
      setTimeout(() => {
        isMuted &&
          window.scrollTo({
            top: height,
            behavior: "smooth",
          });
      }, 0);
    }

    return () => {
      isMuted = false;
    };
  }, [location.pathname, searchParams]);

  return (
    <PageLayout>
      {/* Location */}
      <div id="location_map" className="h-full min-h-[300px]">
        <iframe
          style={{ width: "100%", height: "100%", minHeight: "500px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.4960316981224!2d91.82825471422629!3d22.33489184728412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a87343ffcf%3A0x4f44b97fb9ee0a9!2sMohiuddin%20Market!5e0!3m2!1sen!2sbd!4v1665841817709!5m2!1sen!2sbd"
          frameborder="0"
          scrolling="no"
          loading="Loading..."
        ></iframe>
      </div>

      <div id="contactForm">
        <ContactForm />
      </div>
    </PageLayout>
  );
}

export default Contact;
