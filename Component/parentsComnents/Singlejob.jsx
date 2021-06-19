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
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';

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
                 <li className={styles.li}><div className={styles.Square}><img src='./com.png'/></div></li><br/><br/>
                   <li className={styles.li}><WorkOutlineOutlinedIcon/>&nbsp;<b>{singleJob.title}</b></li><br/>
                   <li className={styles.li}><LocationOnOutlinedIcon/>&nbsp;<b>{singleJob.location}</b></li><br/>
                   <li className={styles.li}> <span><b>₹</b></span> &nbsp;<b>{salaryRang}</b></li>
               </ul>
            </div><br/><br/>

            {/* job Overview */}
            
            <div className={styles.Overview}>
              <h2 className={styles.h2}>Job Overview</h2>
                <div className={styles.div}>
                  <div className={styles.pos}><EventAvailableIcon/>&nbsp;&nbsp;<b>Posted Date</b>&nbsp; &nbsp; &nbsp; &nbsp;:&nbsp;&nbsp;<b>1 Mar 2021</b></div>
                  <div className={styles.vac}><AssessmentIcon/>&nbsp;&nbsp;<b>Vacancy </b> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  &nbsp;&nbsp;<b>{vacancy}</b>
                  </div>
                  
                  


                  <div className={styles.sch}><ScheduleIcon/>&nbsp;&nbsp;<b>Job Nature </b>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;:
                  &nbsp;&nbsp;<b>{singleJob.natureOfEmployment.employmentType}</b></div>
                  <div className={styles.sal}><b>₹ &nbsp;&nbsp; Salary</b>  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;<b>{salaryRang}</b>&nbsp;<b>Monthly</b></div>
                  <div className={styles.trfls}>
                  <div className={styles.true}>
                 <div>{singleJob.facility.accommodation?<p>accommodation: <CheckIcon/> </p>:<p>accommodation: <ClearIcon/></p>}</div>
                  <div className={styles.trans}>{singleJob.facility.transport?<p>transport: <CheckIcon/> </p>:<p>transport:<ClearIcon/></p>}</div>
                  <div className={styles.canten}>{singleJob.facility.canteen?<p>canteen:  <CheckIcon/></p>:<p>canteen:<ClearIcon/></p>}</div>
                  <div className={styles.cookg}>{singleJob.facility.cookingArea?<p>cookingArea:  <CheckIcon/></p>:<p>cookingArea:<ClearIcon/></p>}</div>
                  </div>
                  <div className={styles.false}>
                  <div>{singleJob.facility.medicalCheckup?<p>medicalCheckup: <CheckIcon/> </p>:<p>medicalCheckup:<ClearIcon/></p>}</div>
                  <div>{singleJob.facility.healthInsurance?<p>healthInsurance:  <CheckIcon/></p>:<p>healthInsurance:<ClearIcon/></p>}</div>
                  <div>{singleJob.facility.industrialSafetyGears?<p>industrialSafetyGears: <CheckIcon/> </p>:<p>industrialSafetyGears:<ClearIcon/></p>}</div>
                  <div>{singleJob.facility.overTime?<p>overTime: <CheckIcon/> </p>:<p>overTime:<ClearIcon/></p>}</div>
                  </div>
                  </div>
                  <button type="button" className={styles.Submit} onClick={(e)=>applyJob(e)}>Apply Now</button>
                </div>
            </div>
            

            {/* Job Description */}
              <div className={styles.Description}>
                <h2 className={styles.h2}>Job Description</h2>
                <p className={styles.p}>{singleJob.description}Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.</p>
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