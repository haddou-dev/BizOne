/** @format */

import React from "react";
import classes from "./ContactInfo.module.css";
import { facebookblue, twitterblue } from "../../assets";

const ContactInfo = () => {
  return (
    <div className={classes.contactInfoContainer}>
      <hr class="new4" />
      <div className={classes.contactInfo}>
        <p className={classes.contactInfoText}>
          Proudly Created With <a href="#">Test.com</a> Designed by{" "}
          <a href="#">Test</a>
        </p>
        <p className={classes.contactInfoText}>Test@test.com</p>
        <div className={classes.contactInfoIcons}>
          <img src={facebookblue} alt="facebook" />
          <img src={twitterblue} alt="twitter" />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
