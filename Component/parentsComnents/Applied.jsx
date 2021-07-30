import { React, useState, useEffect, useContext } from "react";
import { userContext } from "../context/UserContext";
import styles from "../../styles/applied.module.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LaptopIcon from "@material-ui/icons/Laptop";
import Tooltip from "@material-ui/core/Tooltip";
import { useRouter } from "next/router";
const Applied = () => {
  const router = useRouter();
  const { detail, singleUser, applied, setApplied, setSingleJob, setId } =
    useContext(userContext);
  const [applyJob, setApplyJob] = useState(false);
  // const [jobid, setjobId] = useState(val.project._id)
  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("user_info"));

      if (data) {
        setApplyJob(data.appliedProject);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  let appliedJob;

  if (applyJob) {
    appliedJob = applyJob.map((val, id) => {
      return <div key={id}>{val.project}</div>;
    });
    console.log(appliedJob);
  }
  let viewDetails;
  // const viewDetails= ()=>{

  // console.log(jobid)
  // setSingleJob(appliedJob.project._id)
  // }
  return (
    <>
      {applyJob &&  applyJob.length != 0 && Object.keys(appliedJob).length != 0 ? (
        <div>
          <div className={styles.headerDiv}>
            <p>You've applied on {applyJob.length} jobs so far. Good luck.</p>
          </div>

          {applyJob.map((val, id) => {
            return (
              <div className={styles.Body}>
                {val.project?<div key={id} className={styles.mainDiv}>
                  <div className={styles.right}>
                    <Tooltip title="View Jobs" placement="top">
                      <div
                        onClick={
                          (viewDetails = () => {
                            router.push("./companies");
                            setId(val.project._id);
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
                      &nbsp;&nbsp;{val.project.title}
                    </div>
                    <div className={styles.location}>
                      <LocationOnIcon fontSize="small" />
                      &nbsp;&nbsp;{val.project.location.split(",")[1]}
                    </div>

                    <div className={styles.time}>
                      <ScheduleIcon fontSize="small" />
                      &nbsp;&nbsp;Applied on {val.appliedOn.split("T")[0]}
                    </div>
                  </div>
                </div>:<div className={styles.mainDiv}>Unfortunately data has been deleted </div>}
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
