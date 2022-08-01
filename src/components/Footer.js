import React from "react";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import github from "../images/github.svg";

export default function Footer() {
  return (
    <div className="footer">
      <a
        className="footer__links"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitter} alt="" className="links" />
      </a>
      <a
        className="footer__links"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="" className="links" />
      </a>
      <a
        className="footer__links"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="" className="links" />
      </a>
      <a
        className="footer__links"
        href="https://www.github.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="" className="links" />
      </a>
    </div>
  );
}
