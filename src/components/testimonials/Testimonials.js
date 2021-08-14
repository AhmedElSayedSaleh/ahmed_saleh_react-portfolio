import React from "react";
import { Undo } from "@material-ui/icons";
import FBIcon from "../../assets/facebook.png";
import GezawyImg from "../../assets/testimonials/mahmoud-elgezawy.jpg";
import MahfouzImg from "../../assets/testimonials/mostafa-mahfouz.jpg";
import NaserImg from "../../assets/testimonials/ahmed-naser.jpg";
import "./testimonials.scss";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Mahmoud Elgezawy",
      title: "Senior Front-End Developer",
      img: GezawyImg,
      icon: FBIcon,
      desc: "Senior Frontend Engineer at ExpandCart.com & Head of the frontend developer teaching at EraaSoft.",
      fb: "https://www.facebook.com/mahmoud.elgezawy.92754",
    },
    {
      id: 2,
      name: "Mostafa Mahfouz",
      title: "Co-Founder of EraaSoft",
      img: MahfouzImg,
      icon: FBIcon,
      desc: "Co-Founder of EraaSoft & Team Leader at Chairman Code & Full Stack Web Instructor at AMIT. ",
      fb: "https://www.facebook.com/mostafa.mahfouz.3720",
      featured: true,
    },
    {
      id: 3,
      name: "Ahmed Naser",
      title: "Senior Software Engineer",
      img: NaserImg,
      icon: FBIcon,
      desc: "Senior Software Engineer at appenza studio & Senior JavaScript Engineer at Digis Squared",
      fb: "https://www.facebook.com/ahmedjsdev",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((item) => (
          <div
            className={item.featured ? "card featured" : "card"}
            key={item.id}
          >
            <div className="top">
              <Undo className="card-icon left" />
              <img src={item.img} className="user-img" alt="" />
              <a href={item.fb} target="_blank" rel="noreferrer">
                <img src={item.icon} className="card-icon right" alt="" />
              </a>
            </div>
            <div className="center">{item.desc}</div>
            <div className="bottom">
              <h3>{item.name}</h3>
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
