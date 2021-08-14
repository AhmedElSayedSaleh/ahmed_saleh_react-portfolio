import React, { useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import UiIcon from "../../assets/globe.png";
import ReactIcon from "../../assets/react_icon.png";
import AngularIcon from "../../assets/angular-icon.png";
import UiImg from "../../assets/ui-dev.jpeg";
import ReactImg from "../../assets/react-dev.jpg";
import AngularImg from "../../assets/angular-development-services.png";

import "./works.scss";

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: UiIcon,
      title: "UI Development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: UiImg,
    },
    {
      id: "2",
      icon: ReactIcon,
      title: "React Development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: ReactImg,
    },
    {
      id: "3",
      icon: AngularIcon,
      title: "Angular Development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: AngularImg,
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <div key={item.id} className="container">
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <div className="img-container">
                    <img src={item.icon} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <a
                    href="https://github.com/AhmedElSayedSaleh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Projects</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <ArrowBackIos
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIos className="arrow right" onClick={() => handleClick()} />
    </div>
  );
}

export default Works;
