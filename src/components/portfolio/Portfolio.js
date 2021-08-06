import React, {useEffect, useState} from 'react';
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    featuredPortfolio,
    uiPortfolio,
    reactPortfolio,
    angularPortfolio
} from "../../data";

function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "ui",
            title: "UI Development"
        },
        {
            id: "react",
            title: "ReactJs"
        },
        {
            id: "angular",
            title: "Angular"
        }
    ]

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "ui":
                setData(uiPortfolio);
                break;
            case "react":
                setData(reactPortfolio);
                break;
            case "angular":
                setData(angularPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList key={item.id} title={item.title} active={selected === item.id}
                                   setSelected={setSelected}
                                   id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {
                    data.map(item => (
                        <a  key={item.id} href={item.url} target="_blank" rel="noreferrer">
                            <div className="item">
                                <img src={item.img} alt=""/>
                                <h3>{item.title}</h3>
                            </div>
                        </a>
                    ))
                }

            </div>
        </div>
    );
}

export default Portfolio;