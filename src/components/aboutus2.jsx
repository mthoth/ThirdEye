import React  from "react";
import insta from '../img/insta.svg';
import twit from '../img/twitter.svg';
import disc from '../img/discord.svg';
function About2()
{
    return(
        <>
        <p className="pcontainer">
                <b className="purple">Third world artists,</b> as a consequence of global politics, <b className="purple">usually are in disadvantage compared to our first world artist counterparts.</b> Even though we move in the international artists circles and markets, <b className="purple">we always charge less for our work.</b>
                </p>
                <p className="pcontainer">
                This collective is an attempt to remedy that. At first, we are grouping on a Discord server to <b className="purple">interact and exchange information.</b> Our goal is to make as much information as possible accessible to new and/or young third world artists in the industry.
                </p>
                <p className="pcontainer">
                In this website,<b className="purple"> we're compiling information about the artistic industry in an accessible and public way.</b> Check out our FAQ for general answers about pricing and the industry, our Resources page for specific information on pricing, agents, contracts and more!
<br></br>And - since we believe empowering local industries in the Global South is important - we recommend you check out Collectives like Us!
                </p>
                <p className="pcontainer">
                If you have knowledge you want to share or need help, feel free to join the Collective! There's always more to teach and learn!
                </p>
                <h3 id="checkitout">Check Out Our Manifesto</h3>
                <div className="center">
                <a href='/thirdeye/Manifesto' id='Manibtn'>Learn More</a>
                </div>
                <div className="socials">
                    <table>
                        <thead>
                        <tr>
                            <td><h3 id="checkitout">Instagram</h3></td>
                            <td><h3 id="checkitout">Twitter</h3></td>
                            <td><h3 id="checkitout">Discord</h3></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><a href="https://www.instagram.com/thirdworld_art/" className="social"><img src={insta} alt="instagram" /></a></td>
                            <td><a href="https://twitter.com/thirdworld_art" className="social"><img src={twit} alt="instagram" /></a></td>
                            <td><a href="https://discord.com/invite/HzXh9aZUJq" className="social"><img src={disc} alt="instagram" /></a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
        </>
    );
}

export default About2;