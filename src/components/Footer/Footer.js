import React from "react";
import classes from "./Footer.module.css";
export default function Footer(props) {
  return (
    <div className={props.class}>
      <div className={`${classes.FooterAlign}`}>
        <div className={classes.wrapper}>
          <div className={`${classes.icon} ${classes.git}`}>
            <div className={classes.tooltip}>Github</div>
            <span>
              <a href="https://github.com/AsishPreetham">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={`${classes.icon} ${classes.facebook}`}>
            <div className={classes.tooltip}>Twitter</div>
            <span>
              <a href="https://twitter.com/AsishGundala">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={`${classes.icon} ${classes.linked}`}>
            <div className={classes.tooltip}>Linkedin</div>
            <span>
              <a href="https://www.linkedin.com/mwlite/in/asishpreetham">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={`${classes.icon} ${classes.mail}`}>
            <div className={classes.tooltip}>Mail</div>
            <span>
              <a href="mailto:asishgundala@gmail.com">
                <ion-icon name="mail"></ion-icon>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={`${classes.icon} ${classes.what}`}>
            <div className={classes.tooltip}>whatsapp</div>
            <span>
              <a href="https://wa.me/9177816468 ">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={`${classes.icon} ${classes.you}`}>
            <div className={classes.tooltip}>YouTube</div>
            <span>
              <a href="https://youtube.com/@samuelpaulgundala4674 ">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={`${classes.icon} ${classes.insta}`}>
            <div className={classes.tooltip}>Instagram</div>
            <span>
              <a href="https://instagram.com/son_of_mightyone?igshid=ZGUzMzM3NWJiOQ== ">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </span>
          </div>
        </div>
      </div>
      <p className={classes.footp}>
        Copyright ©2023 by PREETHAM . All rights reserved.
      </p>
    </div>
  );
}
