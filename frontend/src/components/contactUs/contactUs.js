import React, { Fragment, useState } from "react";
import Navbar from "../navbar/navbar";
import Title from "../../custom/Title/Title";

import "./contactUs.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const { name, email, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("https://troopers421.herokuapp.com/contact", {
      name,
      email,
      message,
    });
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setSent(true);
    // history.push("/");
  };

  if (sent) {
    <Title title="We will Reach out to you as soom as possible" />;
  }

  return (
    <Fragment>
      <Navbar />
      {!sent ? (
        <div className="form">
          <p className="title">Contact Us</p>
          <form onSubmit={(e) => onSubmit(e)} method="post" id="form1">
            <input
              onChange={(e) => onChange(e)}
              value={name}
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <br></br>
            <input
              onChange={(e) => onChange(e)}
              value={email}
              type="text"
              name="email"
              placeholder="Email"
              required
            />
            <br></br>
            <textarea
              onChange={(e) => onChange(e)}
              value={message}
              name="message"
              placeholder="Your Message"
              required
            />
            <input className="btn" type="submit" value="Submit" />
          </form>
        </div>
      ) : (
        <div>
          <Title title="Thank You for you Message. We will Reach out to you soon." />
          <br />
          <Link className="btn_next" to="/">
            Home
          </Link>
        </div>
      )}
    </Fragment>
  );
};

export default ContactUs;
