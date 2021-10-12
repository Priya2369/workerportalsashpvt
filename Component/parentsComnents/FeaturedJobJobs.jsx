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
import LoadingSpinner from '../propComponents/ReactSpinner'
export default function FeaturedJobJobs() {
  const [items, setItems] = useState(false);
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
            sortOrder:"desc",
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
  }, [searchLocation,searchJob, jobType,page, clean]);
  return (
    <>
      {!items?<div className={styles.dataErrorCard}>
        <LoadingSpinner/></div>
        
       
        
        :<>
        {items.length === 0?<> <img className={styles.serachImg} src='./job-search-svg-png-icon-free-download-543505-onlinewebfontscom-job-search-png-980_982.png'/>
        <p>No data found with current search</p> </>:<div>{items.map((item, id) => {
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
                  location={typeof item.location === 'object'?
                  item.location.map((loc, id)=>{
                    return <span key={id}>{loc},</span>
                  })
                  :item.location
                  }

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
          })}</div>}
       
      </>}
      {count>0?<div className={styles.pagination}>
        {page>0?<div className={styles.prev}><SkipPreviousIcon  className={styles.butt} fontSize="large" onClick={() =>setPage(page - 1)}/></div>:
        <SkipPreviousIcon  fontSize="large" disabled={true}/>}
        <div>
                      <p className={styles.p}>
                        Showing 
                        <span >{page*10} </span>
                        to
                        <span > {count>page*10+10?page*10+10:count} </span>
                        of
                        <span > {count} </span>
                        results
                      </p>
                    </div>
       <div>{count>page*10+10 && count>10? <SkipNextIcon className={styles.butt} fontSize="large" onClick={() =>setPage(page + 1)}/>:null}</div>
      </div>:null}
    </>
  );
}
