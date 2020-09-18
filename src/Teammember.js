import React from 'react';
import "./style.css";
import "tachyons";
const Teammember = (prop) => {
    return (
        <div className="ma4 dib bg-light-purple pa3">
            <img src={  "https://joeschmoe.io/api/v1/"+
             prop.name} alt="Ashis" className="imagestyle"/>
            <h3 className="tc">{prop.name}</h3>
            <p className="tc">{prop.project}</p>
        </div>
    );
}

export default Teammember;
