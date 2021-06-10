import { useState, useContext} from 'react';
import styles from '../../styles/Singlejob.module.css'
import {userContext} from '../context/UserContext'
import { API_CONSTANTS } from "../config/apiConstant";
import { getCookies } from "../config/FirebaseToken";
import { toast } from "react-toastify";
import axios from "axios";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ScheduleIcon from '@material-ui/icons/Schedule';

toast.configure();

const Singlejob = () =>{

  const {singleJob, setSingleJob} = useContext(userContext);
  const [projectId, setProjectId] = useState(singleJob._id)
  console.log(singleJob)
   
  async function applyJob(e) {
    e.preventDefault() 
    console.log(getCookies())
    try {
      //  console.log(coookieValue)
      const reqUrl =API_CONSTANTS.baseUrl + API_CONSTANTS.enrollment.WORKER_APPLY_PROJRCT+projectId;
       

      const res = await axios.post(reqUrl, {}, {
        headers: {
          
          authorization: getCookies(),
        },  
      });
      console.log(res.data)
      // console.log(res.response.data)
      if(res.data.message==='Project apply successful'){
        toast.success("Project apply successful", {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          position: "bottom-right",
          autoClose: 5000,
        });
      }
      
    } catch (error) {
      console.log(error.response.data.statusCode)
      if(error.response.data.statusCode === 422){
        toast.error("already applied", {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          position: "bottom-right",
          autoClose: 5000,
        });

      }
      
    }
  }
// map for salary range 
  let salaryRang;
  if(singleJob.requirements){
    salaryRang = singleJob.requirements.map((requ, id) => {
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

    // map for Vacancy
    let vacancy;
    if(singleJob.requirements){
      vacancy = singleJob.requirements.map((requ, id) => {
        return (
          <div key={id}>
            <div>
              {requ.details.map((vac, id)=>{
                return(
                  <div key={id}>{vac.noOfPeople}</div>
                )
              })}
            </div>
          </div>
        );
      })
    }
  

    return(
        <>
        {singleJob.title && singleJob.location && singleJob.natureOfEmployment && singleJob.facility&&singleJob.description?
        <div className={styles.sigjob}>
            {/* jobcard */}
          <div className={styles.ARAPL}>
               
               <ul className={styles.ul}>
                 <li className={styles.li}><div className={styles.Square}></div></li><br/><br/>
                   <li className={styles.li}><WorkOutlineOutlinedIcon/>{singleJob.title}</li><br/>
                   <li className={styles.li}><LocationOnOutlinedIcon/>{singleJob.location}</li><br/>
                   <li className={styles.li}>{salaryRang}</li>
               </ul>
            </div><br/><br/>

            {/* job Overview */}
            
            <div className={styles.Overview}>
              <h2 className={styles.h2}>Job Overview</h2>
                <div className={styles.p}>
                  <p><EventAvailableIcon/>Posted Date:&nbsp; &nbsp; &nbsp; &nbsp;1 Mar 2021</p>
                  <div><AssessmentIcon/>Vacancy : &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                  {vacancy}
                  </div>
                  
                  


                  <p><ScheduleIcon/>Job Nature :&nbsp; &nbsp;&nbsp; &nbsp;
                  {singleJob.natureOfEmployment.employmentType}</p>
                  <div>₹ Salary : &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;{salaryRang} yearly</div>
                 <div>{singleJob.facility.accommodation?<p>accommodation:yes </p>:<p>accommodation:No</p>}</div>
                  <div>{singleJob.facility.transport?<p>transport:yes </p>:<p>transport:No</p>}</div>
                  <div>{singleJob.facility.canteen?<p>canteen:yes </p>:<p>canteen:No</p>}</div>
                  <div>{singleJob.facility.cookingArea?<p>cookingArea:yes </p>:<p>cookingArea:No</p>}</div>
                  <div>{singleJob.facility.medicalCheckup?<p>medicalCheckup:yes </p>:<p>medicalCheckup:No</p>}</div>
                  <div>{singleJob.facility.healthInsurance?<p>healthInsurance:yes </p>:<p>healthInsurance:No</p>}</div>
                  <div>{singleJob.facility.industrialSafetyGears?<p>industrialSafetyGears:yes </p>:<p>industrialSafetyGears:No</p>}</div>
                  <div>{singleJob.facility.overTime?<p>overTime:yes </p>:<p>overTime:No</p>}</div>
                  <button type="button" className={styles.Submit} onClick={(e)=>applyJob(e)}>Apply Now</button>
                </div>
            </div>
            

            {/* Job Description */}
              <div className={styles.Description}>
                <h2 className={styles.h2}>Job Description</h2>
                <p className={styles.p}><WorkOutlineOutlinedIcon fontSize="small"/>{singleJob.description}</p>
                {/* <h2 className={styles.h2}>Required Knowledege,Skills and Abilities</h2>
                <ul type="star">
                  <li>System Software Development.</li>
                  <li>Mobile Application iOS/Android/Tizen or other platform.</li>
                  <li>Research and code,libraries,APIs and frameworks.</li>
                  <li>Strong knowledge on software development cycle.</li>
                  <li>Strong problem solving and debugging skills.</li>

                </ul> */}
               
                {/* <h2 className={styles.h2}>Education + Experience</h2>
                <ul className={styles.ul}>
                    <li>3 or more years of professional design experience.</li>
                    <li>Direct response email experience.</li>
                    <li>Ecommerce website design experience.</li>
                    <li>Familiarity with mobile and web apps preferred.</li>
                    <li>Experience using vision a plus.</li>
                </ul> */}
              </div>

            

            {/* Conpnay Details */}
            {/* <div className={styles.Information}>
    
              <h3 className={styles.h3}>Company Information</h3>
              <h3 className={styles.h3}>ARAPL</h3>
                <div className={styles.p}>
                  <p>It is a long established that a<br/>
                  reader will be distracted by the<br/> readable content of a page when <br/>looking as its layout</p>

                  <p ><b>employmentTyp:</b>&nbsp; &nbsp; 
                  {singleJob.natureOfEmployment['employmentType']}
                  </p>
                  <p ><b>natureOfProject:</b> &nbsp; &nbsp;&nbsp;
                  
                  </p>
                  <p ><b>Email :</b>&nbsp; &nbsp; &nbsp;xyz@gmail.com</p>
                </div>
            </div> */}
            
        
            
            
     
            
            </div>:<div>Loding...................</div> }    
        </>
    )
}

export default Singlejob;