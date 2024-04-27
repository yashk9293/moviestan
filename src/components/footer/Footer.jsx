import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Moviestan is a web application built using React and Redux that allows
          users to search for movies and TV shows, view popular, trending, and
          upcoming releases on a daily and weekly basis, and explore detailed
          information about each title, including trailers and related videos.
        </div>
        <div className="socialIcons">
        <Link to={`https://github.com/yashk9293/`} target="_blank">
          <span className="icon">
            <FaGithub />
          </span>
        </Link>
        <Link to={`https://www.instagram.com/yashk9293/`} target="_blank">
          <span className="icon">
            <FaInstagram />
          </span>
        </Link>
        <Link to={`https://twitter.com/Yashk_9293`} target="_blank">
          <span className="icon">
            <FaTwitter />
          </span>
        </Link>
        <Link to={`https://www.linkedin.com/in/yashk9293/`} target="_blank">
            <span className="icon">
              <FaLinkedin />
            </span>
        </Link>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
