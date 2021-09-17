import React, { useEffect, useRef } from "react";
import { ExpandMore, AssignmentReturnedOutlined } from "@material-ui/icons";
import { init } from "ityped";
import IntroImg from "../../assets/01.png";
import Pdf from "../../assets/pdf/Ahmed_Saleh-CV.pdf";

import "./intro.scss";

function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Developer", "Freelancer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="image-container">
          <img src={IntroImg} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ahmed Saleh</h1>
          <h3>
            Front End <span ref={textRef}></span>
          </h3>
          <a
            className="cv"
            href={Pdf}
            target="_blank"
            rel="noreferrer"
            download
          >
            Download CV{" "}
            <AssignmentReturnedOutlined style={{ marginLeft: "5px" }} />
          </a>
        </div>
        <a href="#portfolio" className="arrow-down">
          <ExpandMore style={{ fontSize: 60 }} />
        </a>
      </div>
    </div>
  );
}

export default Intro;
