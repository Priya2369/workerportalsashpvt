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
  const { jobCatagories, jobLocation, searchLocation,searchJob} = useContext(userContext);
  useEffect(() => {
    async function getData() {
      if(jobCatagories || jobLocation){
        try {
       const reqUrl = API_CONSTANTS.baseUrl+ API_CONSTANTS.project.SEARCH_ALL_PROJECTS_PUBLIC+"?sectors="+jobCatagories+"&location="+jobLocation+"&page=0&limit=50&sort=createdAt&sortOrder=asc"
          
  
          const res = await axios.get(reqUrl, {
            headers: {
              // authorization:cookies.get('access_token') ,
               authorization:getCookies() ,
            },
          });
          console.log("job list..."+res);
          setItems(res.data.projects);
        } catch (error) {
          console.log(error);
        }
      } else if(searchLocation || searchJob){
        try {
       

          const reqUrl = API_CONSTANTS.baseUrl+ API_CONSTANTS.project.SEARCH_ALL_PROJECTS_PUBLIC+"?sectors="+searchJob+"&location="+searchLocation+"&page=0&limit=50&sort=createdAt&sortOrder=asc"
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
       

        const reqUrl = API_CONSTANTS.baseUrl+ API_CONSTANTS.project.SEARCH_ALL_PROJECTS_PUBLIC+"?sectors="+jobCatagories+"&location="+jobLocation+"&page=0&limit=50&sort=createdAt&sortOrder=asc"
        

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
  }, [jobCatagories, jobLocation, searchLocation,searchJob]);
  return (
    <>
      <div>
        
        {items
          
          .slice(0, 10)
          .map((item, id) => {
            return (
              <div key={id}>
                <FeaturedJob
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
      </div>
      <div>{jobCatagories}</div>
    </>
  );
}
