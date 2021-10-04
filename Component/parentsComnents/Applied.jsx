import { React, useState, useEffect, useContext } from "react";
import { userContext } from "../context/UserContext";
import styles from "../../styles/applied.module.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LaptopIcon from "@material-ui/icons/Laptop";
import Tooltip from "@material-ui/core/Tooltip";
import {API_CONSTANTS} from '../config/apiConstant'
import { useRouter } from "next/router";
import axios from "axios";
import {getCookies} from '../config/FirebaseToken'


const Applied = () => {
  const router = useRouter();
  const { detail, singleUser, applied, setApplied, setSingleJob, setId } =
    useContext(userContext);
  const [applyJob, setApplyJob] = useState(false);
  // const [jobid, setjobId] = useState(val.project._id)
  useEffect(() => {
    
      async function getData() {
        console.log("get api call .......................")
       
          try {
           
  
            const reqUrl = API_CONSTANTS.baseUrl+ API_CONSTANTS.project.SEARCH_APPLIED_PROJECTS
            const res = await axios.get(reqUrl, {
              headers: {
                // authorization:cookies.get('access_token') ,
                 authorization:getCookies() ,
              },
            
            });
            console.log(res)
            console.log(res.data.projects)
            setApplyJob(res.data.projects)
          } catch (error) {
            // console.log(error);
          }
        }
     
      
      getData();
   
  }, []);

  
  let viewDetails;
  
  return (
    <>
      {applyJob &&  applyJob.length != 0  ? (
        <div>
          <div className={styles.headerDiv}>
            <p>You've applied on {applyJob.length} jobs so far. Good luck.</p>
          </div>

          {applyJob.map((val, id) => {
            return (
              <div className={styles.Body}>
                {/* {val.project && val.project!== null? */}
                <div key={id} className={styles.mainDiv}>
                  <div className={styles.right}>
                    <Tooltip title="View Jobs" placement="top">
                      <div
                        onClick={
                          (viewDetails = () => {
                            router.push("./companies");
                            setSingleJob(val);
                          })
                        }
                        className={styles.viewDiv}
                      >
                        <VisibilityIcon fontSize="small" />
                      </div>
                    </Tooltip>
                    <button>Applied</button>
                  </div>
                  <div className={styles.left}>
                    <div className={styles.work}>
                      <LaptopIcon fontSize="small" />
                      &nbsp;&nbsp;{val.title}
                    </div>
                    <div className={styles.location}>
                      <LocationOnIcon fontSize="small" />
                      &nbsp;&nbsp;{typeof val.location === 'object'?
                  val.location.map((loc, id)=>{ 
                    return <span key={id}>{loc},</span>
                  })
                  :val.location
                  }
                    </div>

                    <div className={styles.time}>
                      <ScheduleIcon fontSize="small" />
                      &nbsp;&nbsp;Applied on {val.workerApplications.appliedOn.split("T")[0]}
                    </div>
                  </div>
                </div>
                {/* :<div className={styles.mainDiv}>Unfortunately data has been deleted </div>} */}
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.headerDiv}>

          <p>You have not applied any job!</p>
          
        </div>
      )}
    </>
  );
};

export default Applied;
