/** @format */

import React from "react";
import { Header, HeroContant } from "..";
import classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={classes.container}>
      <Header />
      <HeroContant />
    </section>
  );
};

export default HeroSection;
