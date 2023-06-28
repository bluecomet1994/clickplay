import React from "react";
import Helmet from "../../layouts/Helmet/Helmet";

export default function About() {
  const description =
    "We value your feedback and are eager to hear from you. Our contact page is designed to provide you with a convenient way to reach out to us. Whether you have a question, suggestion, or simply want to say hello, we encourage you to get in touch.";
  const title = "ClickPlay - Contact";

  return (
    <div className="contact">
      <Helmet title={title} description={description} />
      <div className="contact-body">
        <h1 className="more-pages-title">Contact Us</h1>

        <div className="contact-us-email">
          Please reach out to us, whether you have questions, suggestions, or
          simply want to send a friendly greeting. We warmly encourage you to
          get in touch, as your feedback is highly valuable to us. Contact us on
          <span style={{ fontWeight: "600" }}> assist AT techie DOT com</span>
        </div>
      </div>
    </div>
  );
}
