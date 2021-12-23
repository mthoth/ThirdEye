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

function ModsContain()
{
    
    return(
        <div className="about1" style={{backgroundImage: `url(${bg3})`}}>
            <h2>Our Moderators</h2>
            <p className="pwhite">We are volunteers from all over the world, doing what we can to share information and to help artists however we can!</p>
            <p className="pwhite">If you are interested in becoming part of our team, you can either message us or answer this form.</p>
            <div id="grid" className="grid">
                <Modsinfo img={ami} name="Ami" country="Latin America" gender="She/Her They/Them" bio="" email="hihereami@gmail.com"/>
                <Modsinfo img={Asia} name="Asia" country="Southeast Asia" gender="She/Her" bio="" email="n@asianoble.co"/>
                <Modsinfo img={Caro} name="Caro" country="Latin America" gender="She/Her" bio="" email="caroriera@hotmail.com.ar"/>
                <Modsinfo img={iara} name="Iara" country="Latin America" gender="She/Her" bio="" email=""/>
                <Modsinfo img={Jack} name="Jack" country="Africa" gender="He/Him" bio="" email=""/>
                <Modsinfo img={Joli} name="Joli" country="Latin America" gender="She/Her" bio="" email="jolivira.artist@gmail.com"/>
                <Modsinfo img={nzube} name="Nzube" country="Africa" gender="He/Him" bio="" email="nzubechukwuazubike@Gmail.com"/>
                <Modsinfo />
                <Modsinfo />
                <Modsinfo />
            </div>

        </div>
    );
}

export default ModsContain;
