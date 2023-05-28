/** @format */

import React from "react";
import { navLinks } from "../../constants";
import classes from "./NavigationLink.module.css";

const NavigationLink = () => {
  return (
    <nav>
      <ul className={classes.navigationLinkList}>
        {navLinks.map((link) => (
          <li key={link.id} >
            <a className={classes.nav_link} href={link.link} >{link.id}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLink;
