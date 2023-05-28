/** @format */

import React from "react";
import { services } from "../../constants";
import { Service } from "..";
import classes from "./ServicesList.module.css";

// className={classes.navigationLinkList} className={classes.nav_link}
const ServicesList = () => {
  return (
    <div className={classes.servicesContainer}>
      <div className={classes.cardsContainer}>
        {services.map((service) => (
          <Service
            id={service.id}
            icon={service.icon}
            descreption={service.descreption}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
