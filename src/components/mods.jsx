import React from "react";

function Modsinfo(props)
{
    return(
        <div className="container">
            <div className="pfp" style={{backgroundImage: `url(${props.img})`}}></div>
            <h5>{props.name}</h5>
            <h5>{props.country}</h5>
            <h5>{props.gender}</h5>
            <h5>{props.bio}</h5>
            <h5>{props.email}</h5>
        </div>
    );
}

export default Modsinfo;