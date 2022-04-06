import { useState, useContext, useEffect } from "react";
import styles from "../../styles/Singlejob.module.css";
import { userContext } from "../context/UserContext";
import { API_CONSTANTS } from "../config/apiConstant";
import { getCookies } from "../config/FirebaseToken";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import axios from "axios";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import SaveJob from "../propComponents/SaveJob";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TextField, Button, FormHelperText } from "@material-ui/core";
import { useRouter } from 'next/router'

//Icons
import GTranslateIcon from "@mui/icons-material/GTranslate";
import WorkIcon from "@mui/icons-material/Work";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import WcIcon from "@mui/icons-material/Wc";
import BadgeIcon from "@mui/icons-material/Badge";

toast.configure();

const Singlejob = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const { singleJob, setSingleJob, id } = useContext(userContext);
  const [projectId, setProjectId] = useState(singleJob._id);
  const [applyBtnHide, setApplyBtnHide] = useState(true)

  useEffect(() => {
    if (id && id !== singleJob._id) {
      async function getJobByID() {
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

            setSingleJob(res.data.project);
          } catch (error) {
            console.log(error);
          }
        }
      }

      getJobByID();
    }
  }, []);

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

  async function applyJob(e) {
    setApplyBtnHide(false)
    e.preventDefault();
    // console.log(projectId)
    try {
      //  console.log(coookieValue)
      const reqUrl =
        API_CONSTANTS.baseUrl +
        API_CONSTANTS.project.APPLY_PROJECT +
        singleJob._id;

      const res = await axios.put(
        reqUrl,
        {},
        {
          headers: {
            authorization: getCookies(),
          },
        }
      );
      // console.log(res.data.projectData.value);
      // localStorage.setItem("user_info",JSON.stringify(res.data.projectData.value))
      console.log(res);
      if (res.data.message === "Project apply successful") {
        toast.success("Job apply successful", {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          position: "bottom-right",
          autoClose: 5000,
        });

        const timer = setTimeout(() => {
          router.push('/jobs');
        }, 2000);
        return () => clearTimeout(timer);
        
      }
      setApplyBtnHide(true)
    } catch (error) {
      // console.log(error.response.data.statusCode);
      console.log(error);
      if (error.response) {
        toast.error(error.response.data.message, {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          position: "bottom-right",
          autoClose: 5000,
        });
        const timer = setTimeout(() => {
          router.push('/jobs');
        }, 2000);
      }
    }
  }
  // map for salary range
  let salaryRang;
  if (singleJob.requirements) {
    salaryRang = singleJob.requirements.map((requ, id) => {
      return (
        <div key={id}>
          <div>
            {requ.details.map((sal, id) => {
              return (
                <div key={id}>
                  {sal.salaryPerMonth.minValue.toLocaleString()} - {sal.salaryPerMonth.maxValue.toLocaleString()}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  }

  // map for Vacancy
  let vacancy;
  if (singleJob.requirements) {
    vacancy = singleJob.requirements.map((requ, id) => {
      return (
        <div key={id}>
          <div>
            {requ.details.map((vac, id) => {
              return <div key={id}>{vac.noOfPeople}</div>;
            })}
          </div>
        </div>
      );
    });
  }

  //Map for English skill
  let englishs;
  if (singleJob.requirements) {
    englishs = singleJob.requirements.map((eng, id) => {
      return (
        <div key={id}>
          <div>{eng.english}</div>
        </div>
      );
    });
  }

  
  //map for  minimum Education
  let minEducation;
  if (singleJob.requirements) {
    minEducation = singleJob.requirements.map((mined, id) => {
      return (
        <div key={id}>
          <div>{mined.minimumEducation}</div>
        </div>
      );
    });
  }
  //map for skill
  let skills;
  if (singleJob.requirements) {
    skills = singleJob.requirements.map((skil, id) => {
      return (
        <div key={id}>
          <div>{skil.skill}</div>
        </div>
      );
    });
  }
  //map for Other Skill
  let otherskills;
  if (singleJob.requirements) {
    otherskills = singleJob.requirements.map((otherskil, id) => {
      return (
        <div key={id}>
          <div>{otherskil.skillOther}</div>
        </div>
      );
    });
  }
  //Map for Sector
  let sectors;
  if (singleJob.sectors) {
    sectors = singleJob.sectors.map((sec, id) => {
      return (
        <div key={id}>
          <div>{sec.charAt(0).toUpperCase() + sec.substring(1).toLowerCase()}</div>
        </div>
      );
    });
  }
  //Map for natureOfproject

  let natureofprojct;
  if (singleJob.sectors) {
    natureofprojct = singleJob.natureOfProject.map((nop, id) => {
      return (
        <div key={id}>
          <div>{nop}</div>
        </div>
      );
    });
  }

  return (
    <>
      {singleJob ? (
        <div className={styles.sigjob}>
          {/* jobcard */}
          <div className={styles.ARAPL}>
            <div className={styles.flexi}>
              {/* <div className={styles.favr}>
                <SaveJob />
              </div> */}
            </div>
            
            <ArrowBackIcon fontSize="large" className={styles.BackButton}
                            onClick={() => { router.push("./jobs"); }} />
            
            <ul className={styles.ul}>
              <li className={styles.li}>
                <div className={styles.Square}>
                  <img src="./com.png" />
                </div>
              </li>
              <br />
              <br />
              <li className={styles.li}>
                <WorkOutlineOutlinedIcon className={styles.icon}/>
                &nbsp;
                <b>
                  {singleJob.companyId
                    ? singleJob.companyId.CompanyName
                    : singleJob.title}
                </b>
              </li>
              <br />
              <li className={styles.li}>
                <LocationOnOutlinedIcon />
                &nbsp;
                <b>
                  {typeof singleJob.location === "object"
                    ? singleJob.location.map((loc, id) => {
                        return <span key={id}>{loc},</span>;
                      })
                    : singleJob.location}
                </b>
              </li>

              <br />
              <li className={styles.li}>
                <span>
                  <b>₹</b>
                </span>
                &nbsp;<b>{salaryRang}</b>
              </li>
            </ul>
          </div>
          <br />
          <br />

          {/* job Overview */}

          <div className={styles.Overview}>
            <h2 className={styles.h2}>Job Overview</h2>
            <div className={styles.div}>
              <div className={styles.divData}>
                <div className={styles.divSec}>
                  <div className={styles.pos}>
                    <EventAvailableIcon />
                    &nbsp;&nbsp;<b>Posted Date</b>&nbsp; &nbsp; &nbsp; &nbsp;
                    <b>:</b>&nbsp;&nbsp;
                    <b>{singleJob.createdAt.split("T")[0]}</b>
                  </div>
                  <div className={styles.vac}>
                    <AssessmentIcon />
                    &nbsp;&nbsp;<b>Vacancy </b> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>:</b> &nbsp;&nbsp;
                    <b>{vacancy}</b>
                  </div>

                  <div className={styles.sch}>
                    <ScheduleIcon />
                    &nbsp;&nbsp;<b>Job Nature </b>&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;<b>:</b> &nbsp;&nbsp;
                    <b>{natureofprojct[0]}</b>
                  </div>
                  <div className={styles.sal}>
                    &nbsp;
                    <b>₹ &nbsp;&nbsp; Salary</b> &nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>:</b>
                    &nbsp;&nbsp;
                    <b>{salaryRang}</b>&nbsp;<b>Monthly</b>
                  </div>

                  {singleJob.requirements[0].english?<div className={styles.new}>
                    <GTranslateIcon />
                    &nbsp;
                    <b>English</b>
                    <b className={styles.enghb}>:</b>&nbsp; <b>{capitalizeFirstLetter(singleJob.requirements[0].english)}</b>
                  </div>:null}
                  <div className={styles.new}>
                    <WorkIcon />
                    &nbsp;
                    <b>Experience</b>&nbsp;&nbsp;
                    <b className={styles.expb}>:</b>&nbsp;
                    <b>
                      {singleJob.requirements[0].experienceInYear
                        ? singleJob.requirements[0].experienceInYear+" Year"
                        :singleJob.requirements[0].minExperienceInYear&&singleJob.requirements[0].maxExperienceInYear?singleJob.requirements[0].minExperienceInYear +"-"+ singleJob.requirements[0].maxExperienceInYear +" years" :"Fresher"}
                    </b>
                  </div>

                  <div className={styles.skill}>
                    <PsychologyIcon />
                    &nbsp;
                    <b>Skill</b>&nbsp; &nbsp; <b>:</b>&nbsp; &nbsp;{" "}
                    <b>{typeof singleJob.requirements[0].skill === "object"
                    ? singleJob.requirements[0].skill.map((skil, id) => {
                        return <span key={id}>{skil==="Other"?"not":skil} ,</span>;
                      }):singleJob.requirements[0].skill}</b>
                  </div>

                  <div className={styles.new}>
                    <AccountBalanceIcon />
                    &nbsp;
                    <b>Sector</b>&nbsp;&nbsp; <b>:</b> &nbsp;&nbsp;
                    <b>{sectors}</b>
                  </div>
                </div>

                <div className={styles.divthrd}>
                  {/* <div className={styles.new}>
              <MiscellaneousServicesIcon/>
                <b>Other Skill</b> : <b>{otherskills}</b>
               
              </div> */}

                  {singleJob.gender?<div className={styles.new}>
                    <WcIcon />
                    &nbsp;
                    <b>Gender</b> <b className={styles.gen}>:</b>&nbsp;&nbsp;
                    <b>{singleJob.gender}</b>
                  </div>:null}
                  {singleJob.requirements[0].minimumEducation?<div className={styles.new}>
                    <MenuBookIcon />
                    &nbsp;
                    <b>Education</b> <b className={styles.edu}>:</b>&nbsp;&nbsp;{" "}
                    <b>{singleJob.requirements[0].minimumEducation}</b>
                  </div>:null}
                  {singleJob.natureOfEmployment && singleJob.natureOfEmployment.jobTiming ?<div className={styles.new}>
                    <AccessTimeIcon />
                    &nbsp;
                    <b>Job Timing </b> <b className={styles.jobt}>:</b>{" "}
                    &nbsp;&nbsp;<b>{singleJob.natureOfEmployment.jobTiming}</b>
                  </div>:null}
                  {singleJob.natureOfEmployment && singleJob.natureOfEmployment.durationInDays?<div className={styles.new}>
                    <AvTimerIcon />
                    &nbsp;
                    <b>
                      Duration In Days &nbsp;&nbsp; <b>:</b>&nbsp;&nbsp;
                      {singleJob.natureOfEmployment.durationInDays}
                    </b>
                  </div>:null}
                  {singleJob.tag?<div className={styles.new}>
                    <BadgeIcon />
                    &nbsp;
                    <b>Tag</b> <b className={styles.tag}>:</b>&nbsp;
                    <b>{singleJob.tag === "whitecollar"?"White Collar":"Blue Collar"}</b>
                  </div>:null}
                  {/* {experiance === "experianced" && (
                    <div className={styles.new}>
                      <AccessTimeIcon />
                      &nbsp;
                      <b>Experience In Year</b>&nbsp;&nbsp; <b>:</b>&nbsp;{" "}
                      <b>{experianceInYear}</b>
                    </div>
                  )} */}
                </div>
              </div>

              <div className={styles.trfls}>
                <div className={styles.true}>
                  <div>
                    {singleJob.facility.accommodation ? (
                      <p>
                        Accommodation: <CheckIcon />{" "}
                      </p>
                    ) : (
                      <p>
                        Accommodation: <ClearIcon />
                      </p>
                    )}
                  </div>
                  <div className={styles.canten}>
                    {singleJob.facility.workFromHome ? (
                      <p>
                        Work From Home: <CheckIcon />
                      </p>
                    ) : (
                      <p>
                        Work From Home:
                        <ClearIcon />
                      </p>
                    )}
                  </div>
                  {/* <div className={styles.trans}>
                    {singleJob.facility.transport ? (
                      <p>
                        transport: <CheckIcon />{" "}
                      </p>
                    ) : (
                      <p>
                        transport:
                        <ClearIcon />
                      </p>
                    )}
                  </div> */}
                  <div className={styles.canten}>
                    {singleJob.facility.canteen ? (
                      <p>
                        Canteen: <CheckIcon />
                      </p>
                    ) : (
                      <p>
                        Canteen:
                        <ClearIcon />
                      </p>
                    )}
                  </div>
                  {/* <div className={styles.cookg}>
                    {singleJob.facility.cookingArea ? (
                      <p>
                        cookingArea: <CheckIcon />
                      </p>
                    ) : (
                      <p>
                        cookingArea:
                        <ClearIcon />
                      </p>
                    )}
                  </div> */}
                  <div>
                    {singleJob.facility.medicalCheckup ? (
                      <p>
                        MedicalCheckup: <CheckIcon />{" "}
                      </p>
                    ) : (
                      <p>
                        MedicalCheckup:
                        <ClearIcon />
                      </p>
                    )}
                  </div>
                </div>
                {/* <div className={styles.false}>
                
                  
                
               
                </div> */}
                {/* <p>projectid{singleJob._id}</p> */}
              </div>
              <div className={styles.butDiv}>
                {applyBtnHide?<button
                  type="button"
                  className={styles.Submit}
                  onClick={(e) => applyJob(e)}
                >
                  Apply Now
                </button>:<button type="button" disabled className={styles.Submit}>wait..</button>}
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className={styles.Description}>
            <h2 className={styles.h2}>Job Description</h2>
            <p 
            className={styles.p}
            >{singleJob.description}</p>
            {/* <TextField
                    // as={TextField}
                    multiline
                    className={styles.p}
                    name="description"
                    required
                    id="outlined-basic"
                    disabled
                    // label="Job Description"
                    // variant="outlined"
                    value={singleJob.description}
                    // error={!!errors.description}
                  /> */}
          </div>
          
        </div>
      ) : (
        <div>Loading...................</div>
      )}
    </>
  );
};

export default Singlejob;
