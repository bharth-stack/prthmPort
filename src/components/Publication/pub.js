import React from "react";
import classes from "../AllCss/BodyStyle.module.css";
import classesPub from "./pub.module.css";
import holder from "../assets/11.jpeg";
import holderCert from "../assets/12.jpeg";
import Nav from "../NavBar/Nav";
import MobNav from "../MobileNav/MobNav.js";
export default function pub() {
  return (
    <div className={classesPub.WorkContainer}>
      <h2 className={classes.pageName}>My Projects</h2>
      <MobNav></MobNav>
      <Nav class={` ${classes.Nav}`}></Nav>
      <div className={classesPub.container}>
        <div>
          <img className={classesPub.pub_img} src={holder}></img>
        </div>
        <div>
          <img className={classesPub.pub_img2} src={holderCert}></img>
        </div>
      </div>
      <div className={`${classesPub.container} ${classesPub.container2}`}>
        <div>
          <a
            className={classesPub.link}
            href={
              "https://drive.google.com/file/d/1osIdZl8mZYc8hEdBWOxu-tVANV5bG26d/view?usp=share_link"
            }
          >
            Copyright
          </a>
        </div>
        <div>
          <a
            className={`${classesPub.link} ${classesPub.link2}`}
            href={
              "https://drive.google.com/file/d/1jYgk8Mp_JKLFOaM9sZvCjYDuvBQguSKW/view?usp=share_link"
            }
          >
            Research Paper
          </a>
        </div>
      </div>
    </div>
  );
}
