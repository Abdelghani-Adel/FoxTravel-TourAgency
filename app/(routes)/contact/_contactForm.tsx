import React from "react";

const ContactForm = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <h3 className="text-center textSecondary">Send us a message</h3>
      <input className="form-control" type="text" placeholder="Name" />
      <input className="form-control" type="email" placeholder="Email" />
      <input className="form-control" type="text" placeholder="Phone" />
      <textarea className="form-control" placeholder="Message" rows={3} />
      <button className="foxBtn secondBtn">SEND</button>
    </div>
  );
};

export default ContactForm;
