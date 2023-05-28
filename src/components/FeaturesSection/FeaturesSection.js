/** @format */

import React from "react";
import classes from "./FeaturesSection.module.css";
import {FeaturesContent} from '..'
import {featuresimg} from '../../assets/'

const FeaturesSection = () => {
  return (
    <div className={classes.featuresSection}>
      <img className={classes.featuresImg} src={featuresimg} alt="featuresimg" />
      <FeaturesContent/>
    </div>
  );
};

export default FeaturesSection;
