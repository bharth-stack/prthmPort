import React from "react";
import classesAbout from "./About.module.css";
import classes from "../AllCss/BodyStyle.module.css";
import classesWork from "../Work/Work.module.css";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer.js";
import Me from "../assets/01.jpg";

import MobNav from "../MobileNav/MobNav.js";
import { Student, NavigationArrow, Phone, EnvelopeOpen } from "phosphor-react";
export default function About() {
  return (
    <div className={classesAbout.AboutContainer}>
      <h2 className={classes.pageName}>About Me</h2>
      <MobNav></MobNav>
      <Nav class={classes.Nav}></Nav>
      <div className={classesAbout.AboutImg}>
        <div className={`${classesWork.container_1} ${classesWork.conta}`}>
          <div className={classesWork.card}>
            <div className={`${classesWork.face} ${classesWork.face1}`}>
              <div className={classesWork.Workcontent}>
                <img className={classesAbout.Img} src={Me}></img>
              </div>
            </div>
            <div className={`${classesWork.face} ${classesWork.face2}`}>
              <div className={classesWork.Workcontent}>
                <h5>First Name: ASISH PREETHAM </h5>
                <h5>Last Name: GUNDALA</h5>
                <h5>
                  <Student size={24} weight="thin" />
                  &ensp; Sathyabama IST
                </h5>
                <h5>
                  <NavigationArrow size={24} weight="thin" />
                  &ensp; Chennai,India
                </h5>
                <h5>
                  <Phone size={24} weight="thin" />
                  &ensp; 9177816468
                </h5>
                <h5>
                  <EnvelopeOpen size={24} weight="thin" />
                  &ensp; asishgundala@gmail.com
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classesAbout.aboutContent}`}>
        <h2>Hello👋🏻, this is Asish Preetham Gundala</h2>
        <h3>
          Myself, I am a Graduate👨🏻‍🎓 from Sathyabama Institue of Science and
          Technology with a Bachelor’s degree in Computer Science👨🏻‍💻 and
          Engineering.
        </h3>
        <p>
          <span>&#8658;</span> I Am a Programmer. I use C, C++, Java, Python,
          SQL, Data Structures and Algorithms using C andC++ for coding
          programs.
        </p>
        <p>
          <span>&#8658;</span> Motivated college student with special interests
          in Computer science and Engineering. To pursue an opportunity in a
          competitive environment that will challenge me to push my boundaries
          and expand my knowledge in the field of computer science while
          allowing me to add value to the dynamics of the Institution.
        </p>
        <p>
          <span>&#8658;</span> I am a Programmer. I use Java, Python, SQL, Data
          Structures and Algorithms for coding. Coming to my Projects. I have
          done some projects using Python and Django also almost all my projects
          are based on Python and Machine Learning. My projects are the chat
          bot, Student Performance Prediction and many more.
        </p>
        <p>
          <span>&#8658;</span>Record Holder in “World Record International
          Hands-On IOT and Ethical hacking workshop.
        </p>
        <p>
          <span>&#8658;</span>Executive member in State Development Committe of
          the National Youth Council of India.
        </p>
        <p>
          <span>&#8658;</span>Machine Learning conducted by Cognibot Labs.
        </p>
        <p>
          <span>&#8658;</span>Django Web Development by Credo Systemz
        </p>
      </div>
      {/* <Footer class={classes.content_3}></Footer> */}
    </div>
  );
}
