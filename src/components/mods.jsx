import React from "react";
import insta from '../img/insta.svg';
import twit from '../img/twitter.svg';
import web from '../img/Web.svg';
import tumb from '../img/Tumblr.svg';
import yout from '../img/Youtube.svg';
import twitch from '../img/Twitch.svg';

function Modsinfo(props)
{
    const emailto = () =>
    {
        let email = "mailto: ";
        
        email = email + props.email;
        return email;
    };

    return(
        <div className="container">
            <div className="pfp" style={{backgroundImage: `url(${props.img})`}}></div>
            <h5 className="modtitle">{props.name}</h5>
            <h5>{props.country}</h5>
            <h5>{props.gender}{props.gender2}</h5>
            <h5 className="modbio">{props.bio}</h5>
            <div className="email">{props.email === "N/A" ? <span style={{color: `white`}} href="" className="modemail">{props.email}</span> : <a href={emailto()} className="modemail">{props.email}</a>}</div>
            <div className="modlinkcontain">

            {props.instagram ? <a href={props.instagram} className="modlinks"><img src={insta} alt="" className="modlinkimg"/></a> : ""}
            {props.twitter ? <a href={props.twitter} className="modlinks"><img src={twit} alt="" className="modlinkimg"/></a> : ""}
            {props.tumblr ? <a href={props.tumblr} className="modlinks"><img src={tumb} alt="" className="modlinkimg"/></a> : ""}
            {props.youtube ? <a href={props.youtube} className="modlinks"><img src={yout} alt="" className="modlinkimg"/></a> : ""}
            {props.twitch ? <a href={props.twitch} className="modlinks"><img src={twitch} alt="" className="modlinkimg"/></a> : ""}
            {props.web ? <a href={props.web} className="modlinks"><img src={web} alt="" className="modlinkimg"/></a> : ""}
            
            </div>
        </div>
    );
}

export default Modsinfo;