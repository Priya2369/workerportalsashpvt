import { useState, useContext } from "react";
import styles from "../../styles/filterJob.module.css";
import FilterListIcon from "@material-ui/icons/FilterList";
import { JobSearchContext } from "../context/JobSearchContext";
import { userContext } from "../context/UserContext";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import { SECTORSCONSTANTS } from "../Array/sectorsConstants";
import { SKILLS } from "../Array/skills";
import state from "../array/state";
import skills from "../array/skillList";
import { JOBROLE_CONSTANTS } from "../Array/JobRole";

export default function FilterJob() {
  const {
    getfilterValue,
    setFilterValue,
    jobCatagories,
    jobLocation,jobRoles,
    jobSkill,

    setSearchLocation,
    setSearchJob,
    jobTypes,
    sorting,
    setJobType,
    setSortJob,
    skill,
    setSkill,
    jobRole,
    setJobRole,
    searchSkill,
    setSearchSkill,
    searchJobRole,
    setSearchJobRole,
  } = useContext(userContext);

  const [show, setShow] = useState(true);

  function SearchFilter(e) {
    e.preventDefault();
    setSearchSkill(jobSkill);
    setSearchJobRole(jobRoles);
    setSearchJob(jobCatagories);
    setSearchLocation(jobLocation);
    setJobType(jobTypes);
    setSortJob(sorting);
    setShow(false);
  }

  function clearAll(e) {
    e.preventDefault();
    setShow(true);
    setFilterValue({
      jobCatagories: "",
      jobTypes: "",
      jobLocation: "",
      experience: "",
      postedWithin: "",
      salary: "",
      sorting: "",
      jobSkill: "",
      jobRoles:""
    });
    setSearchJob();
    setSearchLocation();
    setJobType();
    setSortJob();
  }

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.first}>
          <div>
            {/* <h6 >Job Category</h6> */}
            <input
              list="jobs"
              placeholder="Category/sector"
              value={jobCatagories}
              onChange={(e) =>
                setFilterValue({
                  ...getfilterValue,
                  jobCatagories: e.target.value,
                })
              }
            />
            <datalist id="jobs">
              {SECTORSCONSTANTS.map((val, i) => {
                return <option key={i} value={val}></option>;
              })}
            </datalist>
            {/* input list for skill */}
            <input
              list="skills"
              placeholder="skill"
              value={jobSkill}
              onChange={(e) =>
                setFilterValue({
                  ...getfilterValue,
                  jobSkill: e.target.value,
                })
              }
            />
            <datalist id="skills">
              {SKILLS.map((val, i) => {
                return <option key={i} value={val}></option>;
              })}
            </datalist>
            {/* input list for job role or title */}
            <input
              list="role"
              placeholder="Job Role/ Title"
              value={jobRoles}
              onChange={(e) =>
                setFilterValue({
                  ...getfilterValue,
                  jobRoles: e.target.value,
                })
              }
            />
            <datalist id="role">
              {JOBROLE_CONSTANTS.map((val, i) => {
                return <option key={i} value={val}></option>;
              })}
            </datalist>
            {/* <h6>Job Location</h6> */}
            <input
              list="locations"
              placeholder="Location"
              value={jobLocation}
              onChange={(e) =>
                setFilterValue({
                  ...getfilterValue,
                  jobLocation: e.target.value,
                })
              }
            />
            <br />
            <datalist id="locations">
              {state.map((val, i) => {
                return <option key={i} value={val}></option>;
              })}
            </datalist>
          </div>

          {/* <div className={styles.btnn1} onClick={clearAll} >
             <button type='reset'>Clear All</button></div> */}
        </div>

        <div className={styles.radioSection}>
          {/* <div className={styles.radioBtn1}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                <b>JobType</b>
              </FormLabel>
              <RadioGroup
                aria-label="jobtype"
                name="jobtype1"
                value={jobTypes}
                onChange={(e) =>
                  setFilterValue({
                    ...getfilterValue,
                    jobTypes: e.target.value,
                  })
                }
              >
                <div className={styles.rdiobtn1}>
                  <FormControlLabel
                    value="permanent"
                    control={<Radio />}
                    label="Permanent"
                  />
                  <FormControlLabel
                    value="contract"
                    control={<Radio />}
                    label="Contract"
                  />
                </div>
              </RadioGroup>
            </FormControl>
          </div> */}

          {/* Job sorting........................ */}
          {/* <div className={styles.radioBtn2}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                <b>Sort By Date</b>
              </FormLabel>
              <RadioGroup
                aria-label="sorting"
                name="sorting1"
                value={sorting}
                onChange={(e) =>
                  setFilterValue({
                    ...getfilterValue,
                    sorting: e.target.value,
                  })
                }
              >
                <div className={styles.rdiogrp}>
                  <FormControlLabel
                    value="asc"
                    control={<Radio />}
                    label="Oldest to Newest"
                  />
                  <FormControlLabel
                    value="desc"
                    control={<Radio />}
                    label="Newest to Oldest"
                  />
                </div>
              </RadioGroup>
            </FormControl>
          </div> */}
        </div>

        {show ? (
          <div className={styles.btnn} onClick={(e) => SearchFilter(e)}>
            <button>
              <b>Search</b>
            </button>
          </div>
        ) : (
          <div className={styles.btnn} onClick={clearAll}>
            <button type="reset">
              <b>Clear All</b>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
