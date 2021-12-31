import React from "react";

function Reveal (props)
{
    React.useEffect(() => {
        let heights = [];
        const hide = document.getElementsByClassName("hidden");

        for (let i = 0; i < hide.length; i++) {
            if(props.equal)
                heights.push(500);
            else
                heights.push(hide[i].clientHeight)
            hide[i].style.maxHeight = "0px";
        }

        let q1 = document.getElementsByClassName("question");
        function hidden(i) {

            if (hide[i].style.maxHeight === "0px")
                hide[i].style.maxHeight = heights[i] + "px";
            else
                hide[i].style.maxHeight = 0;
        }
        for (let i = 0; i < q1.length; i++) {
            q1[i].addEventListener("mousedown", function () { hidden(i); });
        }
    })
    return(<></>);
}

export default Reveal