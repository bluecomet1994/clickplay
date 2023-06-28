import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Router from 'next/router';
import useOperator from './../../hooks/rootContext/useOperator';

export const Footer = () => {
  const goTo = (to) => {
    Router.push("/" + to);
    window.scrollTo(0, 0);
  };

  const { changeTestType } = useOperator();

  return (
    <div className="FooterMain">
      <div className="Foot">
        <div className="FooterContainer">
          <button
            className="footer-button-mouse"
            onClick={() => changeTestType("Click", 5000)}
          >
            <img
              className="footer-icon-mouse"
              alt="footer-icon"
              src="/white-favicon.png"
            />
            <span className="FooterLogo">Click Play</span>
          </button>
          <div>
            <div className="footerText">Follow Us On</div>
            <div className="follow">
              <FaFacebookF
                href="https://www.facebook.com/"
                className="footer-icons"
              />

              <BsYoutube
                href="https://www.youtube.com/"
                className="footer-icons"
              />
            </div>
          </div>
        </div>
        <ul>
          <li style={{ listStyle: "none", color: "gray" }}>
            © Click Play 2023
          </li>
          <li className="each-footer-link" onClick={() => goTo("terms")}>
            Terms
          </li>
          <li className="each-footer-link" onClick={() => goTo("about")}>
            About Us
          </li>

          <li className="each-footer-link" onClick={() => goTo("privacy")}>
            Privacy
          </li>
          <li className="each-footer-link" onClick={() => goTo("contact")}>Contact </li>
        </ul>
      </div>
    </div>
  );
};
