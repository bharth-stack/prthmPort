import React, { Fragment } from "react";
import Nav from "../NavBar/Nav";
import { NavLink, Link } from "react-router-dom";
import classes from "../AllCss/BodyStyle.module.css";
import Footer from "../Footer/Footer.js";
import Button from "../Buttons/Button";
import MobNav from "../MobileNav/MobNav.js";
export default function Home(props) {
  return (
    <Fragment>
      <div className={classes.container}>
        <MobNav></MobNav>
        <Nav class={classes.Nav}></Nav>
        <div className={classes.content_1}>
          <h4 className={classes.heading_4}> Hey!! this is</h4>
          <h1 className={classes.heading_1}> ASISH PREETHAM GUNDALA</h1>
        </div>
        <div className={classes.content_2}>
          <div className={classes.main}>
            <h2 className={classes.heading_2}>I am a</h2>
            <div className={classes.roller}>
              <span className={classes.rolltext}>
                Programmer 👨🏻‍💻
                <br />
                Editor 🚀
                <br />
                Singer 🧑🏻‍🎤
                <br />
                Freelancer🙂
                <br />
                Traveller ✈️
                <br />
                Musician 🎵
                <br />
                Drummer 🥁
                <br />
              </span>
            </div>
          </div>
          <p>
            You are Looking at My Portfolio. Hey🙋🏻‍♂️, this is Asish Preetham
            Gundala, a Graduate from Sathyabama Institute of Science and
            Technology with a Bachelor's Degree in Computer Science and
            Engineering.
          </p>
          <p>
            Motivated college student 🧑🏻‍🎓 with special interests in Computer
            science and Engineering to pursue an opportunity in a competitive
            environment that will challenge me to push my boundaries and expand
            my knowledge in the field of computer science while allowing me to
            add value to the dynamics of the Insitution
          </p>
          <NavLink to="/about">
            <Button name={"More About Me"}></Button>
          </NavLink>
        </div>
        <Footer class={classes.content_3}></Footer>
      </div>
    </Fragment>
  );
}
