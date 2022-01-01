import React from "react";
import data from "../others.json"


function OthersContent ()
{
    let collectives = data.Collectives.map((d, i) => {
        return (
        <tr key={i} className="others-tr">
            <td className="others-td">{d.name}</td>
            <td className="others-td break-word"><a href={d.socialmedia} className=" not-bold">{d.socialmedia}</a></td>
            <td className="others-td break-word"><a href={d.discord} className=" not-bold">{d.discord}</a></td>
            <td className="others-td break-word"><a href={d.website} className=" not-bold">{d.website}</a></td>
        </tr>
        );
    });

    let discords = data["Discord Servers"].map((d, i) => {
        return (
        <tr key={i} className="others-tr">
            <td className="others-td">{d.name}</td>
            <td className="others-td break-word"><a href={d.link} className=" not-bold">{d.link}</a></td>
        </tr>
        );
    });

    let directories = data.Directories.map((d, i) => {
        return (
        <tr key={i} className="others-tr">
            <td className="others-td">{d.name}</td>
            <td className="others-td break-word"><a href={d.link} className=" not-bold">{d.link}</a></td>
        </tr>
        );
    });



    return (
        <>
        <p>Here's a list of art collectives and groups that have a similar goal to ours. Make sure to check their own rules before joining!</p>
        <p>If you know/are part of a collective whose goals align with ours, send it to a Mod or to one of our social medias ;)</p>
        <br />
        <h2 className="content-subtitle">Collectives and Associations</h2>
        <table className="others-table">
            <thead>
                <tr className="others-tr">
                    <th className="others-th bgred">
                        Name
                    </th>
                    <th className="others-th bgred"> 
                        Social Media
                    </th>
                    <th className="others-th bgred">
                        Discord Server
                    </th>
                    <th className="others-th bgred">
                        Website
                    </th>
                </tr>
            </thead>
            <tbody>
                {collectives}
            </tbody>
        </table>
        <br />
        <h2 className="content-subtitle">Useful Discord Servers</h2>
        <table className="others-table">
            <thead>
                <tr className="others-tr">
                    <th className="others-th bgorange">
                        Name
                    </th>
                    <th className="others-th bgorange"> 
                        Invite Links
                    </th>
                </tr>
            </thead>
            <tbody>
                {discords}
            </tbody>
        </table>
        <br />
        <h2 className="content-subtitle">Directories and Databases</h2>
        <table className="others-table">
            <thead>
                <tr className="others-tr">
                    <th className="others-th bggreen">
                        Name
                    </th>
                    <th className="others-th bggreen">
                        Website
                    </th>
                </tr>
            </thead>
            <tbody>
                {directories}
            </tbody>
        </table>
        </>
    );
}

export default OthersContent;