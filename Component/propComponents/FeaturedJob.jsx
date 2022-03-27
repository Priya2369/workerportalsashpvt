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
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AttributionIcon from '@mui/icons-material/Attribution';
import Cookies from "universal-cookie";

export default function FeaturedJob(props) {
  const cookies = new Cookies();
  const { setSingleJob, id, setId } = useContext(userContext);
  // const [id, setId] = useState();

  function capitalizeFirstLetter(string) {
    return (
      string.map((word) => word[0].toUpperCase() + word.slice(1))
    )
  }

  function capitalize(arr) {
    const result = arr.map((element) => {
      const word = element.split(" ")
      const capital = word.map((letter) => letter[0].toUpperCase() + letter.slice(1))
      return capital.join(" ")
    })
    return result.toString()
  }

  const router = useRouter();
  const click = async () => {
    // console.log(id);


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

            //onClick={handleLogin}
            >
              <b>Apply</b>
            </button>
          </div>
        </div>
        <div className={styles.skillsContainer}>
          <div className={styles.company}>
            <BusinessIcon fontSize="small" />

            <span>Company  </span>{props.company}
          </div>
          <div className={styles.skills}>
            <DehazeIcon fontSize="small" />
            <span className={styles.span}>Category   </span>{capitalize(props.skill)}
          </div>
          {props.jobRole&&<div className={styles.skills}>
            <AssignmentIndIcon fontSize="small" />
            <span className={styles.span}>Job Role  </span>{props.jobRole}
          </div>}
          {/* <div className={styles.skilll}>
            <AttributionIcon fontSize="small"/>
            <span className={styles.span}>skill    </span>{props.skills}
          </div> */}
          <div className={styles.skilll}>
            <LocationOnIcon fontSize="small" />
            <span className={styles.span}>Location    </span>{props.location}
          </div>
          <div className={styles.skillr}>

            <b>₹</b> &nbsp; <span>Salary Range  </span> {props.salary}
          </div>
          <div className={styles.skillp}>
            <EventAvailableIcon fontSize="small" />
            <span>Posted On  </span> {props.postedOn}
          </div>
        </div>
      </div>
    </>
  );
}
