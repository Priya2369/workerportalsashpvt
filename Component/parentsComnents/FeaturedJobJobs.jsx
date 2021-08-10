import Head from "next/head";
import { React, useState, useEffect, useContext } from "react";
// import { JobSearchContext } from "../context/JobSearchContext";
import {userContext} from '../context/UserContext'
import styles from "../../styles/featuredJob.module.css";
import FeaturedJob from "../propComponents/FeaturedJob";
import axios from "axios";
import {getCookies} from '../config/FirebaseToken'
import {API_CONSTANTS} from '../config/apiConstant'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

export default function FeaturedJobJobs() {
  const [items, setItems] = useState([]);
  const [clean,setClean]=useState(false);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState("");
  const {   searchLocation,searchJob,jobType, sortJob,setLocation, setJobType} = useContext(userContext);
  
  useEffect(() => {
    async function getData() {
      // if(searchLocation || searchJob|| jobType || shortJob){
        setLocation("")
        setJobType("")
        try {
          const params = {
            page: page,
            limit: 10,
            sort:"createdAt",
            ...(sortJob && {sortOrder:sortJob}),
            ...(searchJob && {sectors:searchJob}),
            ...(searchLocation && {location:searchLocation}),
            ...(jobType && {employmentType:jobType}),
            
          };

          const reqUrl = API_CONSTANTS.baseUrl+ API_CONSTANTS.project.SEARCH_ALL_PROJECTS_PUBLIC
          const res = await axios.get(reqUrl, {
            headers: {
              // authorization:cookies.get('access_token') ,
               authorization:getCookies() ,
            },
            params,
          });
          // console.log(res.data.projects);
          setItems(res.data.projects);
          setCount(res.data.count)
        } catch (error) {
          // console.log(error);
        }
      }
   
    
    getData();
  }, [searchLocation,searchJob, jobType,sortJob,page, clean]);
  return (
    <>
      {items.length ===0?<div className={styles.dataErrorCard}>
        
        <img className={styles.serachImg} src='./job-search-svg-png-icon-free-download-543505-onlinewebfontscom-job-search-png-980_982.png'/>
        <p>No data found with current search</p></div>:<div>
        
        {items.map((item, id) => {
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
      <div className={styles.pagination}>
        {page>0?<div className={styles.prev}><SkipPreviousIcon  className={styles.butt} fontSize="large" onClick={() =>setPage(page - 1)}/></div>:
        <SkipPreviousIcon  fontSize="large" disabled={true}/>}
        <div>
                      <p className={styles.p}>
                        Showing
                        <span > 4 </span>
                        to
                        <span > 5 </span>
                        of
                        <span > {count} </span>
                        results
                      </p>
                    </div>
       <div> <SkipNextIcon className={styles.butt} fontSize="large" onClick={() =>setPage(page + 1)}/></div>
      </div>
    </>
  );
}
