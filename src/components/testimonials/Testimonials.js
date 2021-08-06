import React from 'react';
import {Undo} from '@material-ui/icons';
import "./testimonials.scss"

function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Mahmoud Elgezawy",
            title: "Senior Front-End Developer",
            img:
                "assets/testimonials/mahmoud-elgezawy.jpg",
            icon: "assets/facebook.png",
            desc:
                "Senior Frontend Engineer at ExpandCart.com & Head of the frontend developer teaching at EraaSoft.",
            fb: "https://www.facebook.com/mahmoud.elgezawy.92754"
        },
        {
            id: 2,
            name: "Mostafa Mahfouz",
            title: "Co-Founder of EraaSoft",
            img:
                "assets/testimonials/mostafa-mahfouz.jpg",
            icon: "assets/facebook.png",
            desc:
                "Co-Founder of EraaSoft & Team Leader at Chairman Code & Full Stack Web Instructor at AMIT. ",
            fb: "https://www.facebook.com/mostafa.mahfouz.3720",
            featured: true,
        },
        {
            id: 3,
            name: "Ahmed Naser",
            title: "Senior Software Engineer",
            img:
                "assets/testimonials/ahmed-naser.jpg",
            icon: "assets/facebook.png",
            desc:
                "Senior Software Engineer at appenza studio & Senior JavaScript Engineer at Digis Squared",
            fb: "https://www.facebook.com/ahmedjsdev",
        },
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(item=>(
                    <div className={item.featured ? "card featured" : "card"} key={item.id}>
                        <div className="top">
                            <Undo className="card-icon left"/>
                            <img src={item.img} className="user-img" alt=""/>
                            <a href={item.fb} target="_blank" rel="noreferrer">
                                <img src={item.icon} className="card-icon right" alt=""/>
                            </a>
                        </div>
                        <div className="center">
                            {item.desc}
                        </div>
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