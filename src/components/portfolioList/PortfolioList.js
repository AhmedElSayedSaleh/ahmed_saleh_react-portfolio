import React from 'react';

import "./portfolioList.scss";

function PortfolioList({id, title, active, setSelected}) {
    return (
        <li className={active ? "portfolio-list active" : "portfolio-list"} onClick={()=> setSelected(id)}>
            {title}
        </li>
    );
}

export default PortfolioList;