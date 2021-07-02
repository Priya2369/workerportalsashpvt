import { getCookies } from "../config/FirebaseToken";
import { useState, useContext } from "react";
import { userContext } from "../context/UserContext";
import { useRouter } from "next/router";
// import styles from '../../styles/featuredJob.module.css';
import styles from "../../styles/featur.module.css";
import axios from "axios";
import BusinessIcon from "@material-ui/icons/Business";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DehazeIcon from "@material-ui/icons/Dehaze";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { API_CONSTANTS } from "../config/apiConstant";
import Cookies from "universal-cookie";

export default function FeaturedJob(props) {
  const cookies = new Cookies();
  const {  setSingleJob,id, setId } = useContext(userContext);
  // const [id, setId] = useState();
  
  

  const router = useRouter();
  const click = async () => {
    console.log(id);
    

    setId(props.id)
    router.push("/companies");
    
  };
  return (
    <>
     
      <div className={styles.jobCard} onClick={click} id={props.id}>
        <div className={styles.main}>
          
          <div className={styles.jobTitle}>
            <b>{props.company}</b>
          </div>
          <div className={styles.flexi}>
            {/* <div className={styles.visible}>
              <VisibilityIcon fontSize="small" />
            </div>
            <div className={styles.favr}>
              
              <FavoriteIcon fontSize="small" />
            </div> */}

            <button
              className={styles.apply}

              //  onClick={handleLogin}
            >
              <b>Apply</b>
            </button>
          </div>
        </div>
        <div className={styles.skillsContainer}>
          <div className={styles.company}>
            <BusinessIcon fontSize="small" />&nbsp;&nbsp;
            Company &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; {props.company}
          </div>
          <div className={styles.skills}>
            <DehazeIcon fontSize="small" />&nbsp;&nbsp;
            Catagory &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{props.skill}
          </div>
          <div className={styles.skilll}>
            <LocationOnIcon fontSize="small" />&nbsp;&nbsp;
            Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;{props.location}
          </div>
          <div className={styles.skillr}>
            
           <b>₹</b> &nbsp;&nbsp; Salary Range &nbsp;:&nbsp;&nbsp;{props.salary}
          </div>
          <div className={styles.skillp}>
            <EventAvailableIcon fontSize="small" />&nbsp;&nbsp;
            Posted on &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; {props.postedOn}
          </div>
        </div>
      </div>
    </>
  );
}
