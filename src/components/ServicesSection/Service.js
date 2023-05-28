/** @format */

import React from "react";
import classes from "./Service.module.css";

const Service = ({ id, icon, descreption }) => {
  return <div className={classes.card}>
    <img src={icon} alt={id} className={classes.imgService}/>
    <h1 className={classes.titleService}>{id}</h1>
    <p className={classes.DescService}>{descreption}</p>
  </div>;
};

export default Service;
