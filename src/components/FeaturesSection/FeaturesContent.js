/** @format */

import React from "react";
import classes from "./FeaturesContent.module.css";
import { features } from "../../constants";

const FeaturesContent = () => {
  return (
    <div className={classes.featuresContainer}>
      <h1 className={classes.featuresHeading}>unique Experience</h1>
      <p className={classes.featuresPara}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.With the right credit card, you can improve
        your financial life by building credit, earning .
      </p>
      <div>
        <h3 className={classes.featuresTitle}>Features</h3>
        <ul className={classes.featuresList}>
          {features.map((feature) => (
            <li key={feature.id} className={classes.featuresItem}>
              {feature.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturesContent;
