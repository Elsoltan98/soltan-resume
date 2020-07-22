import React from "react";
import Container from "react-bootstrap/Container";

import { ContactP, ContactOverlay, Footer } from "./contact.styles";

const Contact = () => {
  return (
    <div id="contact">
      <ContactOverlay>
        <h4>Contact Me</h4>
        <Container className="text-center">
          <ContactP>
            <i className="fa fa-envelope"></i>
            Email: <span>Ben10a2992@gmail.com</span>
          </ContactP>
          <ContactP>
            <i className="fa fa-phone"></i>
            Phone: <span>+20 1002558326</span>
          </ContactP>
          <ContactP>
            <i className="fa fa-whatsapp"></i>
            Whatsapp: <span>+20 1151613374</span>
          </ContactP>
          <ContactP>
            <i className="fa fa-location-arrow"></i>
            Address: <span>Banha, Qalyubiya, Egypt</span>
          </ContactP>
        </Container>
      </ContactOverlay>
      <Footer className="text-center">
        <p>
          Designed And Developed By <span>@Elsoltan Abdelhameed@ </span>2020
        </p>
      </Footer>
    </div>
  );
};

export default Contact;
