import { useState, useContext } from "react";
import styles from "../../styles/opening.module.css";
import Process from "./Process";
import Link from "next/link";
import { useRouter } from "next/router";
import { userContext } from "../context/UserContext";

export default function Open() {
  const {
    getfilterValue,
    setFilterValue,
    jobCatagories,
    jobLocation,
    setSearchLocation,
    setSearchJob,
    jobTypes,
    sorting,
    setJobType,
     setSortJob,
     setLocation, 
  } = useContext(userContext);


  const router = useRouter();
  function searchJob(e){
    e.preventDefault();
    setFilterValue({
      jobCatagories:"",
	jobTypes:"",
	jobLocation:"",
	experience:"",
	postedWithin:"",
	salary:"",
	sorting:""
    })
    router.push('/jobs')
    setSearchJob();
    setSearchLocation();
    setJobType();
    setSortJob()
    setLocation()
  }

  return (
    <>
      <div className={styles.hedar}>
        <h1>Hire staff or search jobs in All Cities</h1>
        <div className={styles.btngrp}>
          <a
            href="https://corporate.mosahay.org/sign-in"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className={styles.post}>Post New Job</button>
          </a>

          {/* <Link href="/jobs"> */}
            <button className={styles.srch} onClick={searchJob}>
              <a>Search Job</a>
            </button>
          {/* </Link> */}
        </div>
        <Process />
      </div>
    </>
  );
}
