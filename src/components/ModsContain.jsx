import React from "react";
import bg3 from "../img/background3.svg";
import Modsinfo from "./mods";

//profile picture
import ami from "../img/pfp/Ami.jpg";
import Asia from "../img/pfp/Asia.jpg";
import Caro from "../img/pfp/Caro.png";
import iara from "../img/pfp/iara.jpg";
import Jack from "../img/pfp/Jack.JPG";
import Joli from "../img/pfp/joli.png";
import nzube from "../img/pfp/Nzube.jpg";
import moth from "../img/pfp/moth.jpg";
import def from "../img/pfp/unnamed.jpg";

function ModsContain()
{

    const countries = {
        LatinAmerica: <span className='latin chip'>Latin America</span>,
        SoutheastAsia: <span className='southeast chip'>Southeast Asia</span>,
        Africa: <span className='africa chip'>Africa</span>,
        MiddleEast: <span className='middle chip'>Middle East</span>,
        SouthAsia: <span className='south chip'>South Asia</span>,
    };
    const gender = {
        female: <span className="female chip">She/Her</span>,
        male: <span className="male chip">He/Him</span>,
        neutral: <span className="neutral chip">They/Them</span>,
    };
    React.useEffect(() => {
        let grid = document.getElementById("grid");
        grid.scrollTop = 100;
        grid.scrollLeft = 150;
        let pos = { top:0, left: 0, x: 0, y:0};
        const mouseDownHandler = function (e) {
            grid.style.cursor = 'grabbing';
            grid.style.userSelect = 'none';
            pos = {
                // The current scroll
                left: grid.scrollLeft,
                top: grid.scrollTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY,
            };
        
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };
        const mouseMoveHandler = function (e) {
            // How far the mouse has been moved
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;
        
            // Scroll the element
            grid.scrollTop = pos.top - dy;
            grid.scrollLeft = pos.left - dx;
        };
        const mouseUpHandler = function () {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        
            grid.style.cursor = 'grab';
            grid.style.removeProperty('user-select');
        };
        grid.addEventListener("mousedown", mouseDownHandler);
    });
    
    
    return(
        <div className="about1" style={{backgroundImage: `url(${bg3})`}}>
            <h2>Our Moderators</h2>
            <p className="pwhite">We are volunteers from all over the world, doing what we can to share information and to help artists however we can!</p>
            <p className="pwhite">If you are interested in becoming part of our team, you can either message us or answer this form.</p>
            <div id="grid" className="grid">
                <Modsinfo 
                img={ami} 
                name="Ami" 
                country={countries["LatinAmerica"]} 
                gender={gender["female"]} gender2={gender["neutral"]} 
                bio="Argentinian illustrator and History & Film student." 
                email="hihereami@gmail.com"/>
                
                <Modsinfo 
                img={Asia} 
                name="Asia" 
                country={countries["SoutheastAsia"]} 
                gender={gender["female"]} 
                bio="Filipina intersectional feminist, illustrator and smart-ass — I teach Clip Studio Paint basics for absolute beginners - comics, workflow, 3d to 2d, 2d to 3d on my youtube channel" 
                email="n@asianoble.co"
                twitter="https://twitter.com/jolivira_art"
                instagram="https://www.instagram.com/asianobleart"
                youtube="https://www.youtube.com/c/asianoble"
                web="https://www.asianoble.co"/>
                
                <Modsinfo 
                img={Caro} 
                name="Caro" 
                country={countries["LatinAmerica"]} 
                gender={gender["female"]}
                bio="Argentinian visual arts student, illustrator, digital art enthusiast that likes to experiment new things and learn everything she can about it" 
                email="caroriera@hotmail.com.ar"
                twitter="https://twitter.com/dumbranita"
                instagram="https://www.instagram.com/softranita/"/>

                <Modsinfo 
                img={iara} 
                name="Iara" 
                country={countries["LatinAmerica"]} 
                gender={gender["female"]} 
                bio="Argentinian traditional painter and visual arts student" 
                email="N/A"
                twitter="https://twitter.com/ocrequemado"
                instagram="https://twitter.com/ocrequemado"
                tumblr="http://ocrequemado.tumblr.com/"/>

                <Modsinfo 
                img={Jack} 
                name="Jack" 
                country={countries["Africa"]} 
                gender={gender["male"]} gender2={gender["neutral"]} 
                bio="Art hobbyist from Lagos, Nigeria that loves to make illustrations and comics that focus on politics and personal perspectives. Currently living in Canada for my masters in Thermofluids." 
                email="N/A"
                web="https://jack-a.carrd.co/"/>

                <Modsinfo 
                img={Joli} 
                name="Joli" 
                country={countries["LatinAmerica"]} 
                gender={gender["female"]} 
                bio="Brazilian graphic design student that works with digital illustrations and is very enthusiastic about mythology" 
                email="jolivira.artist@gmail.com"
                twitter="https://twitter.com/jolivira_art"
                tumblr="https://jolivira.tumblr.com/tagged/jolivira"
                twitch="https://www.twitch.tv/jolivira"
                web="https://jolivira.carrd.co/"/>

                <Modsinfo 
                img={nzube} 
                name="Nzube" 
                country={countries["Africa"]} 
                gender={gender["male"]} 
                bio="Character Vis development Artist and Illustrator" 
                email="nzubechukwuazubike@Gmail.com"
                twitter="https://www.twitter.com/n_azubikeart/"
                instagram="https://www.intagram.com/n.azubike.art"
                web="https://www.nazubike.com"/>

                <Modsinfo 
                img={moth} 
                name="Moth" 
                country={countries["MiddleEast"]} 
                gender={gender["male"]}
                bio="Computer Science and Graphic Design student from Lebanon. Likes to illustrate as hobby"
                email="hijazimt01@gmail.com"
                instagram="https://www.instagram.com/ArtMorh"
                twitter="https://www.twitter.com/ArtMorh"
                tumblr="https://mthoth.tumblr.com"/>
                <Modsinfo img={def} name="Sabeen" country={countries["SouthAsia"]} gender={gender['female']}/>
                <Modsinfo img={def} name="Flo" country={countries['LatinAmerica']} gender={gender['female']}/>
            </div>

        </div>
    );
}

export default ModsContain;
