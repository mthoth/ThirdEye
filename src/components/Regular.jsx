import React from "react";

function Regular (props)
{
    return(
        <div className="regular">
            <div className="header"></div>
            <div className="content">
                {props.element}
            </div>

        </div>
    );
}

export default Regular;