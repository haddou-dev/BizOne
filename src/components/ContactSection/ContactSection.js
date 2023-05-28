/** @format */

import React from "react";
import classes from "./ContactSection.module.css";
import { Button } from "..";

const ContactSection = () => {
  return (
    <div className={classes.contactContainer}>
      <p className={classes.contactPara}>unleash your creative potential with BizOne</p>
      <h1 className={classes.contactHeading}>Looking For Exlusive Digital Services?</h1>
      <Button content="Let's Talk" stl="greeny" />
    </div>
  );
};

export default ContactSection;
