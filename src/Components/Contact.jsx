import React from "react";

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
    <div id="contact" className="container mt-5 p-3">
      <div className="d-flex justify-content-center flex-column ">
        <h2 className="d-flex mb-5 justify-content-center">Contact Us</h2>
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
            <input className="form-control" type="email" id="email" required />
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
  );
};

export default Contact;
