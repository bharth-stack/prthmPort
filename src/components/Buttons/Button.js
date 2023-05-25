import React from "react";
import classes from "./Button.module.css";
export default function Button(props) {
  return <div className={classes["btn-text"]}>{props.name} &#8594;</div>;
}
