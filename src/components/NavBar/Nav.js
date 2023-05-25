import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Nav.module.css";
import { House, Article, User, BagSimple, Scroll, Star } from "phosphor-react";
import MyResume from "../assets/Myresume.pdf";
export default function Nav(props) {
  return (
    <section className={props.class}>
      <ul className={classes.NavFormat} style={{ paddingLeft: "0rem" }}>
        <li>
          <NavLink to="/" className={classes["item"]}>
            <House size={32} weight="thin" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={classes["item"]} to="/about">
            <User size={32} weight="thin" />
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={classes["item"]} to="/projects">
            <BagSimple size={32} weight="thin" />
            <span>Work</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={classes["item"]} to="/publication">
            <Scroll size={32} weight="thin" />
            <span>Publication</span>
          </NavLink>
        </li>
        <li>
          <a
            className={classes["item"]}
            href={
              "https://drive.google.com/file/d/1f3tpgq2ImPVxHFN2RNPDuX8NL7JXaOip/view?usp=share_link"
            }
          >
            <Article size={32} weight="thin" />
            <span>Resume</span>
          </a>
        </li>
        <li>
          <NavLink className={classes["item"]} to="/certificates">
            <Star size={32} weight="thin" />
            <span>Certificates</span>
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
