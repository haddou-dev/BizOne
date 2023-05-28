/** @format */

import React from "react";
import { socialMediaLinks } from "../../constants";
import classes from "./SocialMedia.module.css";


const SocialMedia = () => {
  return (
    <nav>
      <ul className={classes.SocialMediaList}>
        {socialMediaLinks.map((link) => (
          <li key={link.id}>
            <a href={link.link}>
              <img src={link.icon} alt={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialMedia;
