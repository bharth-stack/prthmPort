import React from "react";
import classesWork from "./Work.module.css";
import classes from "../AllCss/BodyStyle.module.css";
import Nav from "../NavBar/Nav";
import mapty from "../assets/mapty.png";
import meetUps from "../assets/05.jpg";
import groceri from "../assets/06.jpg";
import reduxcart from "../assets/07.jpg";
import webapp from "../assets/08.jpg";
import webapp1 from "../assets/10.jpeg";
import webapp2 from "../assets/09.jpeg";
import Footer from "../Footer/Footer.js";
import MobNav from "../MobileNav/MobNav.js";
export default function Work(props) {
  return (
    <div className={classesWork.WorkContainer}>
      <h2 className={classes.pageName}>My Projects</h2>
      <MobNav></MobNav>
      <Nav class={` ${classes.Nav}`}></Nav>

      <div className={classesWork.container_1Wrapper}>
        <div className={classesWork.container_1}>
          <div className={classesWork.card}>
            <div className={`${classesWork.face} ${classesWork.face1}`}>
              <div className={classesWork.Workcontent}>
                <img src={meetUps} />
              </div>
            </div>
            <div className={`${classesWork.face} ${classesWork.face2}`}>
              <div className={classesWork.Workcontent}>
                <h4>LEAVE MANAGEMENT SYSTEM</h4>
                <h5>#python&ensp;#django&ensp;</h5>
                <p>
                  The purpose of this project is to create an online Leave
                  Management program which is essential to something like an
                  organization or college.
                </p>
                <a href="https://github.com/AsishPreetham/Leave-Management-System">
                  Read More &#8594;
                </a>
              </div>
            </div>
          </div>
          <div className={classesWork.card}>
            <div className={`${classesWork.face} ${classesWork.face1}`}>
              <div className={classesWork.Workcontent}>
                <img src={groceri} />
              </div>
            </div>
            <div className={`${classesWork.face} ${classesWork.face2}`}>
              <div className={classesWork.Workcontent}>
                <h4>BANK LOAN PREDICTION</h4>
                <h5>#python&ensp;#AIML</h5>
                <p>
                  An application to add items to the shopping cart. Items that
                  are added to the cart will be stored in the backend. The user
                  can use the stored data for purchasing items when he needs
                  them.
                </p>
                <a href="https://github.com/AsishPreetham/Bank-Loan-Prediction">
                  Read More &#8594;
                </a>
              </div>
            </div>
          </div>

          <div className={classesWork.card}>
            <div className={`${classesWork.face} ${classesWork.face1}`}>
              <div className={classesWork.Workcontent}>
                <img src={reduxcart} />
              </div>
            </div>
            <div className={`${classesWork.face} ${classesWork.face2}`}>
              <div className={classesWork.Workcontent}>
                <h4>CHAT BOT</h4>
                <h5>#react&ensp;#redux&ensp;#firebase</h5>
                <p>
                  This application helps the users to add the groceries items,
                  count and the price of each item. Implemented a GroceryList
                  Application using React and Firebase for the backend.
                </p>
                <a href="https://github.com/AsishPreetham/chatbot">
                  Read More &#8594;
                </a>
              </div>
            </div>
          </div>
          <div className={classesWork.card}>
            <div className={`${classesWork.face} ${classesWork.face1}`}>
              <div className={classesWork.Workcontent}>
                <img src={webapp} />
              </div>
            </div>
            <div className={`${classesWork.face} ${classesWork.face2}`}>
              <div className={classesWork.Workcontent}>
                <h4>STUDENT PERFORMANCE PREDICTION</h4>
                <h5>#Machine Learning</h5>
                <p>
                  It gives a weather report of a place which was selected by the
                  user. It contains theme changing option and a clock. I used
                  complete frontend and API’s for the project.
                </p>
                <a href="https://github.com/AsishPreetham/Student-Performance-Predition">
                  Read More &#8594;
                </a>
              </div>
            </div>
          </div>
          <div className={classesWork.card}>
            <div className={`${classesWork.face} ${classesWork.face1}`}>
              <div className={classesWork.Workcontent}>
                <img src={webapp1} />
              </div>
            </div>
            <div className={`${classesWork.face} ${classesWork.face2}`}>
              <div className={classesWork.Workcontent}>
                <h4>Alarm-clock</h4>
                <h5>#Python</h5>
                <p>
                  Creating an alarm involves utilizing various modules and
                  functions to monitor the current time and trigger an action
                  when the alarm time is reached.
                </p>
                <a href="https://github.com/AsishPreetham/Python-Alarm-clock">
                  Read More &#8594;
                </a>
              </div>
            </div>
          </div>
          <div className={classesWork.card}>
            <div className={`${classesWork.face} ${classesWork.face1}`}>
              <div className={classesWork.Workcontent}>
                <img src={webapp2} />
              </div>
            </div>
            <div className={`${classesWork.face} ${classesWork.face2}`}>
              <div className={classesWork.Workcontent}>
                <h4>ROCK-PAPER-SCISSOR</h4>
                <h5>#Python</h5>
                <p>
                  Rock Paper Scissors game explores the fundamental concepts and
                  dynamics of the game, examining its strategic elements,
                  psychological aspects, and mathematical probabilities.
                </p>
                <a href="https://github.com/AsishPreetham/ROCK-PAPER-SCISSOR">
                  Read More &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classesWork.container_1}></div>
      </div>
    </div>
  );
}
