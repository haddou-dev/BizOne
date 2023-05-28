/** @format */

import React from "react";
import classes from "./HeroContant.module.css";
import { Button } from "..";

const HeroContant = () => {
  return (
    <div className={classes.content}>
      <div className={classes.paracontainer}>
        <p className={classes.smallHead}>Quickly setup your website</p>
        <p className={classes.bigHead}>
          Style Up your <br />
          business Startegy
        </p>
        <p className={classes.para}>
          it has all unique & new digital experience layouts.
        </p>
      </div>

      <div className={classes.btnContainer}>
        <Button content="Read More" stl="greeny" />
        <Button content="Buy BizOne" stl="bluey" />
      </div>
    </div>
  );
};

export default HeroContant;
