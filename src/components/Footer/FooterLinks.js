/** @format */

import React from "react";
import classes from "./FooterLinks.module.css";

const FooterLinks = ({ links }) => {
  return (
    <div className={classes.footerLinks}>
      <h3 className={classes.footerLinksHeading}>FIND YOUR WAY</h3>
      <ul className={classes.footerLinksList}>
        {links.map((link) => (
          <li key={link.title}>
            <a href={link.link} className={classes.footerLink}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
