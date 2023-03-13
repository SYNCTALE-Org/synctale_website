import React from "react";
import "./Contact.scss";
import {
  faGooglePlus,
  faLinkedin,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="ContactUs">
      <div id="contact" className="container mt-5 p-3">
        <div className="d-flex justify-content-center flex-column ">
          <h1 className="d-flex mb-5 justify-content-center">Contact Us</h1>
          <form
            className="d-flex justify-content-center flex-column"
            onSubmit={onSubmit}
          >
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <button className="mb-5 btn btn-warning " type="submit">
              {formStatus}
            </button>
          </form>
        </div>
      </div>
      <div className="ContactInfo">
        <h2 className="contact-Title">Contact Info</h2>
        <div className="social">
          <FontAwesomeIcon className="contactIcon" icon={faEnvelope} />{" "}
          dev.Synctale@gmail.com
        </div>
        <div className="social">
          <FontAwesomeIcon className="contactIcon" icon={faPhone} /> +961
          03-XXXXXXXX
        </div>
        <div className="social">
          <FontAwesomeIcon className="contactIcon" icon={faLocation} /> Lebanon,
          Choeifat, The Spot Mall, Hexa, Office 3
        </div>
      </div>
    </div>
  );
};

export default Contact;
