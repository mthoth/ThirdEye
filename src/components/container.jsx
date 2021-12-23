import React from "react";


function Container(props)
{
    return(
        <div className="backimg" style={{backgroundImage: `url(${props.img})`}}>
            <div className="contain">
                {props.element}
            </div>
        </div>
    );
}

export default Container;