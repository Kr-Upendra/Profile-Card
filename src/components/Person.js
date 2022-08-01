import React from "react";
import profile from "../images/profile_picture.jpg";
import profile_2 from "../images/profile_picture_2.jpg";
import email from "../images/Email.svg";
import linkedin from "../images/linkedin.svg";

export function Person() {
  return (
    <div className="person">
      <img src={profile} alt="Profile" className="person__img" />
      <h3 className="person__name">Agastya Runner</h3>
      <p className="person__business">Full Stack Developer</p>
      <a href="home" className="person__email person__contact">
        <img className="links person__links" src={email} alt="Mail_logo" />{" "}
        Email
      </a>
      <a href="home" className="person__linkedin person__contact">
        <img className="links person__links" src={linkedin} alt="linkedin" />{" "}
        Linkedin
      </a>
    </div>
  );
}


export function Person2() {
  return (
    <div className="person">
      <img src={ profile_2 } alt="Profile" className="person__img" />
      <h3 className="person__name">Marina shyl</h3>
      <p className="person__business">UI/UX Designer</p>
      <a href="https://mail.google.com/mail/" className="person__email person__contact">
        <img className="links person__links" src={email} alt="Mail_logo" />{" "}
        Email
      </a>
      <a href="https://www.linkedin.com" className="person__linkedin person__contact">
        <img className="links person__links" src={linkedin} alt="linkedin" />{" "}
        Linkedin
      </a>
    </div>
  );
}