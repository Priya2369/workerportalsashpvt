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
  const {  setSingleJob } = useContext(userContext);
  const [id, setId] = useState(props.id);
  
  

  const router = useRouter();
  const click = async () => {
    console.log(id);
    if (cookies.get("access_token")) {
      try {
        //  console.log(coookieValue)
        const reqUrl =
          API_CONSTANTS.baseUrl +
          API_CONSTANTS.project.SEARCH_OTHER_PROJECT_BY_ID +
          id;

        const res = await axios.get(reqUrl, {
          headers: {
            // authorization:cookies.get('access_token') ,
            authorization: getCookies(),
          },  
        });
        console.log(res.data.project);
        console.log(res.data);
        console.log(res.data.project.contactDetails);
        setSingleJob(res.data.project);
        router.push("/companies");
      } catch (error) {
        console.log(error.message);
        // if(error.message = "Request failed with status code 401"){
        // router.push('/signup');
        // }
      }
    } else {
      router.push("/signup");
    }
  };
  return (
    <>
     
      <div className={styles.jobCard} onClick={click} id={props.id}>
        <div className={styles.main}>
          {" "}
          <div className={styles.jobTitle}>
            <b>{props.company}</b>
          </div>
          <div className={styles.flexi}>
            <div className={styles.visible}>
              <VisibilityIcon fontSize="small" />
            </div>
            <div className={styles.favr}>
              {" "}
              <FavoriteIcon fontSize="small" />
            </div>

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
            <BusinessIcon fontSize="small" />
            <span>Company : {props.company}</span>
          </div>
          <div className={styles.skills}>
            <DehazeIcon fontSize="small" />
            <span>Catagory :{props.skill}</span>
          </div>
          <div className={styles.skilll}>
            <LocationOnIcon fontSize="small" />
            <span>Location : {props.location}</span>
          </div>
          <div className={styles.skillr}>
            {" "}
            ₹ <span>Salary Range:{props.salary}</span>
          </div>
          <div className={styles.skillp}>
            <EventAvailableIcon fontSize="small" />
            <span>Posted on : 23 jan 2021</span>
          </div>
        </div>
      </div>
    </>
  );
}
