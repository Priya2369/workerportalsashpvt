import Head from "next/head";
import { React, useState, useEffect, useContext } from "react";
import { JobSearchContext } from "../context/JobSearchContext";
import {userContext} from '../context/UserContext'
import styles from "../../styles/featuredJob.module.css";
import FeaturedJob from "../propComponents/FeaturedJob";
import FeaturdJobData from "../array/FeaturedJobData";
import axios from "axios";
import {getCookies} from '../config/FirebaseToken'
import {API_CONSTANTS} from '../config/apiConstant'

export default function FeaturedJobJobs() {
  const [items, setItems] = useState([]);
  const {   searchLocation,searchJob,jobType} = useContext(userContext);
  
  useEffect(() => {
    async function getData() {
      if(searchLocation || searchJob|| jobType){
        try {
       

          const reqUrl = API_CONSTANTS.baseUrl+ API_CONSTANTS.project.SEARCH_ALL_PROJECTS_PUBLIC+"?sectors="+searchJob+"&location="+searchLocation+"&employmentType="+jobType+"&page=0&limit=50&sort=createdAt&sortOrder=asc"
          const res = await axios.get(reqUrl, {
            headers: {
              // authorization:cookies.get('access_token') ,
               authorization:getCookies() ,
            },
          });
          console.log(res.data.projects);
          setItems(res.data.projects);
        } catch (error) {
          console.log(error);
        }
      } else {

      try {
       

        const reqUrl = API_CONSTANTS.baseUrl+ API_CONSTANTS.project.SEARCH_ALL_PROJECTS_PUBLIC+"?sectors="+searchJob+"&location="+searchLocation+"&employmentType="+jobType+"&page=0&limit=50&sort=createdAt&sortOrder=asc"
        

        const res = await axios.get(reqUrl, {
          headers: {
            // authorization:cookies.get('access_token') ,
             authorization:getCookies() ,
          },
        });
        console.log(res.data.projects);
        setItems(res.data.projects);
      } catch (error) {
        console.log(error);
      }
    }
    }
    getData();
  }, [searchLocation,searchJob, jobType]);
  return (
    <>
      {items.length ===0?<div className={styles.dataErrorCard}>
        
        <img className={styles.serachImg} src='./job-search-svg-png-icon-free-download-543505-onlinewebfontscom-job-search-png-980_982.png'/>
        <p>No data found with current search</p></div>:<div>
        
        {items
          
          
          .map((item, id) => {
            return (
              <div key={id}>
                <FeaturedJob
                postedOn={item.createdAt.split("T")[0]}
                id={item._id}
                  company={item.title}
                  skill={item.requirements.map((skill, id)=>{
                    return(
                      <div key={id}>{skill.skill}</div>
                    )
                  })}
                  location={item.location}
                  salary={item.requirements.map((requ, id) => {
                    return (
                      <div key={id}>
                        <div>
                          {requ.details.map((sal, id) => {
                            return (
                              <div key={id}>
                                {sal.salaryPerMonth.minValue}-
                                {sal.salaryPerMonth.maxValue}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                />
              </div>
            );
          })}
      </div>}
      
    </>
  );
}
