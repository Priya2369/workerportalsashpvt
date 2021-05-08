import React, { useContext,createContext,useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import styles from '../../styles/registration.module.css'
import axios from "axios";
import {getCookies} from '../config/FirebaseToken'
 import validation from '../validation/Validation'
import {useFormik} from 'formik'

import Profile from '../propComponents/Profile'
import JobDescription from '../propComponents/JobDescription'
import Education from '../propComponents/Education'
import TermCondition from '../propComponents/TermCondition'
// import { validate } from 'uuid';
// import { multiStepcontext } from './StepperContext';


export default function StepperForm() {

  const formik = useFormik({
    initialValues:{
      firstName: "",
      lastName:"",
          date: "",
          phoneNo: "",
          gender: "",
          age: "",
          email: "",
          address: "",
          pincode: "",
          city: "",
          state:"",
          country:"",
          education:"",
          specialization:"",
          PassingYear:"",
          yearGap:"",
          collegeUniversity:"",
          CGPAPercentage:"",
          interestArea:"",
          prefferedLocation:"",
          sector:"",
          skill:"",
          experience:"",
          termCondition:false,
    },
    validate:validation,
    onSubmit: values =>{
      alert(json.stringify(values));
    }
    
  })

  
  const [currentStep, setStep] = useState(1);
  // const [prefferedLocation, setPrefferedLocation] = useState('')
  const [userData, setUserData] = useState()
  const [errors, setError] = useState({});
  
let{firstName, lastName, date, phoneNo, gender, age, email, 
  address, pincode, city, state, country, education, specialization, PassingYear, yearGap, collegeUniversity, CGPAPercentage, 
interestArea, prefferedLocation, sector, skill, experience, termCondition } = formik.values
  
  
  
  const firstNext = (e) =>{
    // setError(validation(userData));
    // if(!userData.firstName|| !userData.lastName||!userData.email){
    //   alert("pleas fill correct information")
    // }else{
       setStep(2)
    // }
    
    // if(typeof !errors === "undefined"){
    //   setStep(2)
    // }else{
    //   alert("pleas fill correct information")
    // }
    
   }

  const testDefault = {
    "generalData": {
      "registerBy": "self",
      "name": firstName + lastName,
      "age": Number(age),
      "gender": gender,
      "mobileNumber": phoneNo,
      "pinCode": pincode,
      "address": address
    },
    "skillData": {
      "sectors": [
        sector
        // "agriculture"     
      ],
      "sectorsOther": [
        "string"
      ],
      "skills": [
        skill
        // "poultry farmer"
      ],
      "skillsOther": [
        "string"
      ],
      "experience": {
        "expYear": 0,
        "expMonth": 0
      },
      "education": "passed primary (class 8th)",
      "preferredLocations": [
        prefferedLocation
      ],
      "preferredLocationsOther": [
        "string"
      ],
      "otherInfo": "string"
    },
    "healthData": {
      "currentCondition": [
        "asthma"
      ],
      "currentConditionOther": [
        "string"
      ],
      "symptoms": [
        "fever"
      ],
      "symptomsOther": [
        "string"
      ]
    }
  }
  

  const  submitData = async (e)=>{
    try {
    e.preventDefault();
    console.log("post data started");
    console.log(getCookies())
    const res = await axios.post('https://adminproductionproject.el.r.appspot.com//api/v1/enrollment', testDefault,{
      headers: {
        // authorization:cookies.get('access_token') ,
        authorization:getCookies(),
      },
    })
    console.log(res["message"])
  console.log( "name"+formik.values.firstName)
  
  }catch (error) {
     console.log(`Error: ${error}`)
   } 

  }

    // function submitData(e){
    //   e.preventDefault();
    //   console.log(userData)
    //   console.log(prefferedLocation)
    //   setUserData("")

    // }

  const props = { setStep, submitData,formik, firstNext}; 

  

  function showStep(step){
    switch(step){
      case 1 : 
        return<Profile {...props}/>
      case 2 :
        return<Education {...props}/>
      case 3:
        return <JobDescription {...props}/>
      case 4:
        return<TermCondition {...props}/>
    }
  }
  


  return (
    <>
    <div style={{height:"100%"}}>
    <Stepper  activeStep={currentStep-1} orientation="vertical" className={styles.tab} >
    
      <Step className={styles.tablinks} >
       <StepLabel >Profile</StepLabel>
      </Step>
  
      <Step className={styles.tablinks}>
        <StepLabel>Education</StepLabel>
      </Step>
      <Step className={styles.tablinks}>
        <StepLabel>Job Description</StepLabel>
      </Step>
      <Step className={styles.tablinks}>
        <StepLabel>Terms & Conditions</StepLabel>
      </Step>
    </Stepper>
    </div>

    
    

    {showStep(currentStep)}

   
    </>
  );
}