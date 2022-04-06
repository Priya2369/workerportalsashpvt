import Head from "next/head";
import { useState, useContext } from "react";
1;
import styles from "../../styles/Home.module.css";
import state from "../array/state";
import skills from "../array/skill";
import { userContext } from "../context/UserContext";
import { useRouter } from "next/router";

// const JobSearchContext = createContext({});
export default function Search() {
  const {
    setLocation,
    location,
    setJobType,
    jobType,
    setSearchLocation,
    setSearchJob,
  } = useContext(userContext);
  const router = useRouter();

  const [suggestions, setSuggestions] = useState([]);
  const [suggestion1, setSuggestion1] = useState([]);

  const jobTypeHandler = (jobType) => {
    let matches = [];
    if (jobType.length > 0) {
      matches = skills.filter((skill) => {
        const regex = new RegExp(`${jobType}`, "gi");
        // console.log(area.State);
        const loc = skill.value;
        // console.log(typeof loc);
        return loc.match(regex);
      });
    }
    setSuggestion1(matches);

    setJobType(jobType);
    // console.log(location);
  };

  const LocationHandler = (location) => {
    let matches = [];
    if (location.length > 0) {
      matches = state.filter((area) => {
        const regex = new RegExp(`${location}`, "gi");
        // console.log(area.State);
        const loc = area;
        // console.log(typeof loc);
        return loc.match(regex);
      });
    }
    setSuggestions(matches);

    setLocation(location);
  };

  const onSuggestHandler = (location) => {
    setLocation(location);
    setSuggestions([]);

    //   setJob(job);
    //   setSuggestion1([])
  };

  const onSuggestHandler1 = (jobType) => {
    setJobType(jobType);
    setSuggestion1([]);
  };
  function submit(e) {
    e.preventDefault();
    router.push("/jobs");
    setSearchLocation(location);
    setSearchJob(jobType);
    // jobTypeHandler("")
    // LocationHandler("")
  }

  return (
    <>
      <div className="indexh1">
        {/* <h1>Search Category</h1> */}
        <div className="SearchTitle">
          <input
            className="jobt"
            type="text"
            placeholder="Job Title or Keywords"
            autoComplete="off"
            name="search"
            value={jobType}
            onChange={(e) => jobTypeHandler(e.target.value)}
            
          />

          <input
            className="dropbtn"
            type="text"
            placeholder="Location"
            autoComplete="off"
            name="search"
            value={location}
            onChange={(e) => LocationHandler(e.target.value)}
            // onBlur={()=>{
            //     setTimeout(()=>{
            //         setSuggestions([])
            //     },100);

            // }}
          />

          <button className="sbtn" type="submit" onClick={(e) => submit(e)}>
            Search
          </button>

          <div className="suggestionCard">
            <div className="suggest">
              {suggestion1 &&
                suggestion1.map((suggestion, i) => (
                  <div
                    key={i}
                    className="suggestion"
                    onClick={() => onSuggestHandler1(suggestion.value)}
                  >
                    {suggestion.value}
                  </div>
                ))}
            </div>
            <div className="suggestLocation">
              {suggestions &&
                suggestions.map((suggestion, i) => (
                  <div
                    key={i}
                    className="suggestion"
                    onClick={() => onSuggestHandler(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
