import Head from "next/head";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import state from "../array/state";
import skills from '../array/skill'

export default function Search() {
  const [text, setText] = useState("");
  const[job, setJob] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestion1, setSuggestion1] = useState([])


  const jobTypeHandler = (job)=>{
    let matches = [];
    if (job.length > 0) {
      matches = skills.filter((skill) => {
        const regex = new RegExp(`${job}`, "gi");
        // console.log(area.State);
        const loc = skill.value;
        console.log(typeof loc);
        return loc.match(regex);
      });
    }
    setSuggestion1(matches);

setJob(job)
    console.log(text);
  }



  const LocationHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = state.filter((area) => {
        const regex = new RegExp(`${text}`, "gi");
        // console.log(area.State);
        const loc = area;
        console.log(typeof loc);
        return loc.match(regex);
      });
    }
    setSuggestions(matches);

    setText(text);
    
  };


  const onSuggestHandler = (text, job)=>{
      setText(text);
      setSuggestions([])

    //   setJob(job);
    //   setSuggestion1([])
  }

  const onSuggestHandler1 = (job)=>{
    

    setJob(job);
    setSuggestion1([])
}




  return (
    <>
      <div className="indexh1">
        <h1>Search Category</h1>
        <div className="SearchTitle">
        
          <input
            className="jobt"
            type="text"
            placeholder="Job Title or Keywords"
            autoComplete="off"
            name="search"
            value={job}
            onChange={(e) => jobTypeHandler(e.target.value)}
            // onBlur={()=>{
            //     setTimeout(()=>{
            //         setSuggestion1([])
            //     },100);
                
            // }}
          />
          
          
        
          <input
            className="dropbtn"
            type="text"
            placeholder="Location"
            autoComplete="off"
            name="search"
            value={text}
            onChange={(e) => LocationHandler(e.target.value)}
            // onBlur={()=>{
            //     setTimeout(()=>{
            //         setSuggestions([])
            //     },100);
                
            // }}
        
          />

          
    

          <button className="sbtn" type="submit">
            Search
          </button>
          <div  className="suggest">
          {suggestion1 && suggestion1.map((suggestion,i)=>(
              <div key={i} className="suggestion"  
              onClick={()=>onSuggestHandler1(suggestion.value)} 
              >
                  {suggestion.value}
                  
                  </div>
          ))}
          </div>
          <div className="suggestLocation">
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <div key={i} className="suggestion" onClick={()=>onSuggestHandler(suggestion)}>
                  {suggestion}</div>
            ))}
          </div>
        </div>
        {/* {city.map((val, i)=>{
                    return (
                        <div>{val.State}</div>
                    )
                })} */}
      </div>
    </>
  );
}
