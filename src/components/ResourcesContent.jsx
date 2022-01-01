import React, { useState } from "react";
import data from "../resources.json"



function ResourcesContent() {
    const [filterbutton, setfilterbutton] = useState([null, null, null, null, null, null, null, null]);
    console.log(filterbutton)

    const [empty, setEmpty] = useState(true);
    console.log(empty)



    function buttonfilter(id, pos, color) {

        var labels = document.getElementsByTagName('LABEL');
        for (var i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor !== '') {
                var elem = document.getElementById(labels[i].htmlFor);
                if (elem)
                    elem.label = labels[i];
            }
        }


        const check = document.getElementById(id);
        if (check.checked) {
            check.label.classList.remove("bggrey");
            check.label.classList.add(color);
            updateFieldChanged(pos, id);
        }

        else
        {
            check.label.classList.add("bggrey");
            check.label.classList.remove(color);
            updateFieldChanged(pos, null);
        }






        function updateFieldChanged(index, e) {
            let count = 0;
            let newArr = [...filterbutton]; // copying the old datas array
            newArr[index] = e; // replace e.target.value with whatever you want to change it to
            for (let i = 0; i < newArr.length; i++) {
                if (newArr[i] !== null)
                    count++;
            }

            if (count === 0)
                setEmpty(true)
            else
                setEmpty(false)

            setfilterbutton(newArr);
        }
    }

    const [query, setQuery] = useState("")

    function filt(post) {
        if (query === "")
            return post;
        else if (post.name.toLowerCase().includes(query.toLowerCase())) {
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

        function getlist(t) {
            data.filter(filt).forEach(d => {
                if (d.type === t)
                    list.push(<li key={data.findIndex((check) => { return check === d; })} className="list"><a href={d.link} className="resources">{d.name}</a> {d.paid ? <b style={{ color: "green" }}>$</b> : ""} {d.author}</li>)
            });
            temp2 = list;
            list = [];
            return temp2
        }

        const temp = type.map((t, i) => {
            if (getlist(t).length === 0)
                return null;
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
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] !== null)
                count++;
        }
        if (count > 0)
            return temp;
        else
            return [];
    }





    return (
        <>

            <div><b>Please note:</b> Most of the resources listed are <b>100% free</b>, the ones that are paid are marked with a <b style={{ color: "green" }}>$</b></div>
            <form>
                <input type="text" placeholder="Search by name..." onChange={event => setQuery(event.target.value)} className="search" />
                <div className="flex flex2">
                    <label htmlFor="price" className="regfilter bggrey">About Prices</label> <input type="checkbox" name="prices" id="price" onChange={() => { buttonfilter("price", 0, "bgred") }} />
                    <label htmlFor="contract" className="regfilter bggrey">About Contracts</label> <input type="checkbox" name="contracts" id="contract" onChange={() => { buttonfilter("contract", 1, "bgorange") }} />
                    <label htmlFor="agent" className="regfilter bggrey">About Agents</label> <input type="checkbox" name="agents" id="agent" onChange={() => { buttonfilter("agent", 2, "bggreen") }} />
                    <label htmlFor="course" className="regfilter bggrey">Art Courses</label> <input type="checkbox" name="courses" id="course" onChange={() => { buttonfilter("course", 3, "bgblue") }} />
                    <label htmlFor="program" className="regfilter bggrey">Art Programs</label> <input type="checkbox" name="programs" id="program" onChange={() => { buttonfilter("program", 4, "bgpurple") }} />
                    <label htmlFor="book" className="regfilter bggrey">Books</label> <input type="checkbox" name="books" id="book" onChange={() => { buttonfilter("book", 5, "bgblue") }} />
                    <label htmlFor="misc" className="regfilter bggrey">Misc</label> <input type="checkbox" name="misc" id="misc" onChange={() => { buttonfilter("misc", 6, "bggreen") }} />
                    <label htmlFor="country" className="regfilter bggrey">Country Specific</label> <input type="checkbox" name="country" id="country" onChange={() => { buttonfilter("country", 7, "bgorange") }} />
                </div>
            </form>


            {(getData(data["About Pricing"], "bgred").length === 0 || !empty) && (filterbutton[0] === null || getData(data["About Pricing"], "bgred").length === 0) ?
             "" : [<h2 className="content-subtitle" key={-1}>💸About Pricing</h2>].concat(getData(data["About Pricing"], "bgred"))}

            {(getData(data["About Contracts"], "bgorange").length === 0 || !empty) && (filterbutton[1] === null || getData(data["About Contracts"], "bgorange").length === 0) ?
             "" : [<h2 className="content-subtitle" key={-1}>🖊 About Contracts</h2>].concat(getData(data["About Contracts"], "bgorange"))}

            {(getData(data["About Agents"], "bggreen").length === 0 || !empty) && (filterbutton[2] === null || getData(data["About Agents"], "bggreen").length === 0) ?
             "" : [<h2 className="content-subtitle" key={-1}>⌚ About Agents</h2>].concat(getData(data["About Agents"], "bggreen"))}

            {(getData(data["Art Courses"], "bgblue").length === 0 || !empty) && (filterbutton[3] === null || getData(data["Art Courses"], "bgblue").length === 0) ?
             "" : [<h2 className="content-subtitle" key={-1}>🎓 Free/Affordable Art Courses</h2>].concat(getData(data["Art Courses"], "bgblue"))}

            {(getData(data["Art Programs"], "bgpurple").length === 0 || !empty) && (filterbutton[4] === null || getData(data["Art Programs"], "bgpurple").length === 0) ?
             "" : [<h2 className="content-subtitle" key={-1}>💻 Free/Affordable Art Programs</h2>].concat(getData(data["Art Programs"], "bgpurple"))}

            {(getData(data["Public Domain Books"], "bgblue").length === 0 || !empty) && (filterbutton[5] === null || getData(data["Public Domain Books"], "bgblue").length === 0) ?
             "" : [<h2 className="content-subtitle" key={-1}>📕 Public Domain Books</h2>].concat(getData(data["Public Domain Books"], "bgblue"))}

            {(getData(data["Misc"], "bggreen").length === 0 || !empty) && (filterbutton[6] === null || getData(data["Misc"], "bggreen").length === 0) ?
             "" : [<h2 className="content-subtitle" key={-1}>🎈 Miscellaneous</h2>].concat(getData(data["Misc"], "bggreen"))}

            {(getData(data["Country Specific"], "bgorange").length === 0 || !empty) && (filterbutton[7] === null || getData(data["Country Specific"], "bgorange").length === 0) ? 
            "" : [<h2 className="content-subtitle" key={-1}>🌐 Country Specific Resources</h2>].concat(getData(data["Country Specific"], "bgorange"))}

        </>
    );
}


export default ResourcesContent;