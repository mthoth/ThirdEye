import React, { useState } from "react";
import data from "../resources.json"

function ResourcesContent() {


    const [query, setQuery] = useState("")
    
    function filt(post)
    {
        if (query === "")
            return post;
        else if (post.name.toLowerCase().includes(query.toLowerCase()))
        {
            return post;
        }
    }

    function getData(data, color) {
        color = color + " question"
        let list = [];
        let temp2;
        let type = [1];
        let count = 0;
        data.forEach(d => {
            type.forEach(t => {
                if (type.includes(d.type))
                    return
                else
                    type.push(d.type);
                return
            });

        });
        type.shift()

        function getlist(t){
            data.filter(filt).forEach(d => {
                if (d.type === t)
                    list.push(<li key={data.findIndex((check) => {return check === d;})} className="list"><a href={d.link} className="resources">{d.name}</a> {d.paid ? <b style={{color: "green"}}>$</b> : ""} {d.author}</li>)
            });
            temp2 = list;
            list = [];
            return temp2
        }
        
        const temp = type.map((t, i) => {
            if (getlist(t).length === 0)
            return;
            else
            return (
                <div key={i}>
                    <div className={color}>{t}</div>
                    <div className="hidden"><ul className="listul">
                        {
                           getlist(t)
                        }
                    </ul></div>
                </div>
            );
        });
        for (let i = 0; i < temp.length; i++)
            {
                if(temp[i] != undefined)
                    count++;
            }
        if(count > 0)
        return temp;
        else
        return [];
    }

    return (
        <>

            <div><b>Please note:</b> Most of the resources listed are <b>100% free</b>, the ones that are paid are marked with a <b style={{color: "green"}}>$</b></div>
            <input type="text" placeholder="Search by name..." onChange={event => setQuery(event.target.value)} className="search"/>
            
            
            {getData(data["About Pricing"], "bgred").length === 0 ? "" : [<h2 className="content-subtitle">💸About Pricing</h2>].concat(getData(data["About Pricing"], "bgred"))}
            {getData(data["About Contracts"], "bgorange" ).length === 0 ? "" : [<h2 className="content-subtitle">🖊 About Contracts</h2>].concat(getData(data["About Contracts"], "bgorange" ))}

            {getData(data["About Agents"], "bggreen" ).length === 0 ? "" : [<h2 className="content-subtitle">⌚ About Agents</h2>].concat(getData(data["About Agents"], "bggreen" ))}
            {getData(data["Art Courses"], "bgblue" ).length === 0 ? "" : [<h2 className="content-subtitle">🎓 Free/Affordable Art Courses</h2>].concat(getData(data["Art Courses"], "bgblue" ))}
            {getData(data["Art Programs"], "bgpurple" ).length === 0 ? "" : [<h2 className="content-subtitle">💻 Free/Affordable Art Programs</h2>].concat(getData(data["Art Programs"], "bgpurple" ))}
            {getData(data["Public Domain Books"], "bgblue" ).length === 0 ? "" : [<h2 className="content-subtitle">📕 Public Domain Books</h2>].concat(getData(data["Public Domain Books"], "bgblue" ))}
            {getData(data["Misc"], "bggreen" ).length === 0 ? "" : [<h2 className="content-subtitle">🎈 Miscellaneous</h2>].concat(getData(data["Misc"], "bggreen" ))}
            {getData(data["Country Specific"], "bgorange" ).length === 0 ? "" : [<h2 className="content-subtitle">🌐 Country Specific Resources</h2>].concat(getData(data["Country Specific"], "bgorange" ))}
            
        </>
    );
}


export default ResourcesContent;