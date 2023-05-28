/** @format */

import React from "react";
// import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <>
      <button type="button" className={`${props.stl} btn`}>{props.content}</button>
    </>
  );
};

export default Button;
