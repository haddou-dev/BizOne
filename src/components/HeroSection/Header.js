/** @format */

import React from "react";
import classes from "./Header.module.css";
import { NavigationLink, SocialMedia } from "..";
import { BizOne } from "../../assets";

const Header = () => {
  return (
    <div className={classes.red_bg}>
      <img src={BizOne} alt="BizOne Logo" className={classes.logo} />
      <div className={classes.links_section}>
        <NavigationLink />
        <SocialMedia />
      </div>
    </div>
  );
};

export default Header;
