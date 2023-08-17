import React from "react";
import "./Footer.css";
import Link from "next/link";
import { FiGithub, FiTwitter, } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Timmy</h1>

        <ul className="footer_list">
          <li className="nav_item">
            <Link href="" className="footer_link">
              About
            </Link>
          </li>
          <li className="nav_item">
            <Link href="" className="footer_link">
              Services
            </Link>
          </li>
          <li className="nav_item">
            <Link href="" className="footer_link">
              Projects
            </Link>
          </li>
        </ul>

        <div className="footer_social">
        <Link href ='https://github.com/CodeATM' target = '_blank' >
            <FiGithub className ='footer_social-icon'/>
        </Link>
        <Link href ='https://twitter.com/MatthewOlu86153?t=sXOxcXoje1QDo0g40K3lfQ&s=09' target = '_blank' >
            <FiTwitter className ='footer_social-icon'/>
        </Link>
        <Link href ='https://www.linkedin.com/in/awe-oluwatimileyin-936426248' target = '_blank'>
            <AiFillLinkedin className ='footer_social-icon'/>
        </Link>
        </div>

        <span className="footer_copy">
            &#169; CyberAtm. All right Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
