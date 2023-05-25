import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import MyResume from "../assets/Myresume.pdf";
import { House, Article, User, BagSimple, List, X } from "phosphor-react";
import classes from "../AllCss/BodyStyle.module.css";
import classesMob from "./MobileNav.module.css";
import classesNav from "../NavBar/Nav.module.css";
export default function MobNav(props) {
  const [MobNav, setMobNav] = useState(true);
  const changeMobNavHandler = () => {
    setMobNav(!MobNav);
  };
  const ert = `${classesMob.mobile_nav} ${classesMob.open}`;
  const qwe = `${classesMob.mobile_nav}`;

  return (
    <div className={classesMob.point}>
      <div>
        <button className={`${classesMob.hamburger} ${classesMob.menu}`}>
          <List
            onClick={changeMobNavHandler}
            className={classesMob.icon}
          ></List>
        </button>
      </div>
      <div className={MobNav ? qwe : ert}>
        <button className={classesMob.times}>
          <X onClick={changeMobNavHandler} className={classesMob.icon}></X>
        </button>
        <section>
          <ul className={classesMob.Nav} style={{ paddingLeft: "0rem" }}>
            <li>
              <NavLink to="/" className={classesNav["item"]}>
                <House size={42} weight="thin" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={classesNav["item"]} to="/about">
                <User size={42} weight="thin" />
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={classesNav["item"]} to="/projects">
                <BagSimple size={42} weight="thin" />
                <span>Work</span>
              </NavLink>
            </li>
            <li>
              <a className={classesNav["item"]} href={MyResume}>
                <Article size={42} weight="thin" />
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
