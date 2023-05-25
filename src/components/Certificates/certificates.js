import React from "react";
import classes from "../AllCss/BodyStyle.module.css";
import classesCert from "./certificates.module.css";
import MobNav from "../MobileNav/MobNav.js";
import Nav from "../NavBar/Nav";
import holder1 from "../assets/13.jpeg";
import holder2 from "../assets/14.jpeg";
import holder3 from "../assets/15.jpeg";
import holder4 from "../assets/16.jpeg";
export default function certificates() {
  return (
    <div className={classesCert.WorkContainer}>
      <h2 className={classes.pageName}>My Projects</h2>
      <MobNav></MobNav>
      <Nav class={` ${classes.Nav}`}></Nav>
      <div className={classesCert.container}>
        <div>
          {" "}
          <img className={classesCert.pub_img} src={holder1}></img>
        </div>
        <div>
          {" "}
          <img className={classesCert.pub_img} src={holder2}></img>
        </div>
        <div>
          {" "}
          <img className={classesCert.pub_img} src={holder3}></img>
        </div>
        <div>
          {" "}
          <img className={classesCert.pub_img} src={holder4}></img>
        </div>
      </div>
    </div>
  );
}
