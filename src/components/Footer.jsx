import React from "react";
import insta from '../img/instawhite.svg';
import twit from '../img/twitterwhite.svg';
import disc from '../img/discordwhite.svg';

function Footer()
{
    return(
        <div id="Footer">
            <h4 id="footname">Third Eye Collective - 2021</h4>
            <div>
            <a href="https://discord.com/invite/HzXh9aZUJq"><img src={disc} alt="instagram" className="footsocial"/></a>
            <a href="https://twitter.com/thirdworld_art" ><img src={twit} alt="instagram" className="footsocial"/></a>
            <a href="https://www.instagram.com/thirdworld_art/" ><img src={insta} alt="instagram" className="footsocial"/></a>
            </div>
            
        </div>
    );
}

export default Footer;