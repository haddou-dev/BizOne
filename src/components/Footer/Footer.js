/** @format */

import React from "react";
import classes from "./Footer.module.css";
import { FooterLinks, ContactInfo } from "..";
import { footerLinks } from "../../constants";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerContent}>
        <div className={classes.footerSubscribe}>
          <div className={classes.footerSubscribeHead}>
            <h3 className={classes.footerSubscribeHeading}>SUBSCRIBE</h3>
            <p className={classes.footerSubscribePara}>
              Exciting thing ahead <br /> stay tuned for more information.
            </p>
          </div>
          <form action="" className={classes.footerForm}>
            <div className={classes.footerEmail}>
              <input
                className={classes.footerInput}
                type="text"
                placeholder="Enter your Email Address"
              />
              <button className={classes.footerButton}> OK</button>
            </div>
            <div>
              <input
                className={classes.footerCheck}
                type="checkbox"
                id="agree"
                name="agree"
                value="agree"
              />
              <label for="agree" className={classes.footerSubscribePara}>
                I agree To recieve news and updates
              </label>
            </div>
          </form>
        </div>
        <FooterLinks links={footerLinks} />
      </div>
      <div>
        <ContactInfo />
      </div>
    </div>
  );
};

export default Footer;
