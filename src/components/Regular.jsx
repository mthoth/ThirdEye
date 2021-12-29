import React from "react";

function Regular (props)
{
    return(
        <div className="regular">
            <div className="header"></div>
            <h1 className="content-title" style={{backgroundImage: `url(${props.img})`}}>{props.title}</h1>
            <div className="content">
                {props.element}
            </div>

        </div>
    );
}

export default Regular;