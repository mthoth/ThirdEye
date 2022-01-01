import React, { useEffect } from "react";

function BacktoTop ()
{
    
    useEffect(()=>{
        const button = document.getElementById("top");
        window.onscroll = function()
    {
        if (window.pageYOffset >= 100)
        {
            button.style.opacity=100;
        }
        else
        {
            button.style.opacity=0;
        }
    }

    },[])
    

    function top()
    {
        window.scrollTo({top:0, behavior: "smooth"});
    }


    return (
        <button id="top" onClick={top} className="up">▲</button>
    );
}

export default BacktoTop;