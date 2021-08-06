import React, {useState} from 'react';
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';
import "./works.scss"

function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/globe.png",
            title: "UI Development",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
                "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            icon: "./assets/react_icon.png",
            title: "React Development",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "assets/react-dev.jpg",
        },
        {
            id: "3",
            icon: "./assets/angular-icon.png",
            title: "Angular Development",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "assets/angular-development-services.png",
        },
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map(item => (
                    <div key={item.id} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="left-container">
                                    <div className="img-container">
                                        <img src={item.icon} alt=""/>
                                    </div>
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                    <a href="https://github.com/AhmedElSayedSaleh" target="_blank" rel="noreferrer">
                                        <span>Projects</span>
                                    </a>
                                </div>
                            </div>
                            <div className="right">
                                <img src={item.img} alt=""/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ArrowBackIos className="arrow left" onClick={() => handleClick("left")}/>
            <ArrowForwardIos className="arrow right" onClick={() => handleClick()}/>
        </div>
    );
}

export default Works;