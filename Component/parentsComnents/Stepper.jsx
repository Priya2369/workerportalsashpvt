import React, { useContext,createContext,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import styles from '../../styles/registration.module.css'
import axios from "axios";


import Profile from '../propComponents/Profile'
import JobDescription from '../propComponents/JobDescription'
import Education from '../propComponents/Education'
import TermCondition from '../propComponents/TermCondition'
// import { multiStepcontext } from './StepperContext';


export default function StepperForm() {
  const testDefault = {
  
    "generalData": {
      "registerBy": "self",
      "name": "string",
      "age": 30,
      "gender": "male",
      "mobileNumber": "9090065209",
      "pinCode": "752102",
      "address": "bbsr"
    },
    "skillData": {
      "sectors": [
        "agriculture"
      ],
      "sectorsOther": [
        "string"
      ],
      "skills": [
        "agricultural machinery operator"
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
        "sgm (rajasthan)"
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
    const postData = async (e)=>{
      e.preventDefault();
      console.log("post data started");
     try {
    //   const res= await fetch("http://localhost:8080/api/v1/enrollment",{
       
    //   method:"POST",
    //   headers:{
    //     "content-Types": "application/json"
    //   },
    //   body: JSON.stringify(testDefault)
    // });
    // const data = await res.json();
    //  if(!data){
    //    console.log("invalid registration");
    //  }else{
    //   console.log("registration Successfull");
    //  }

    axios.post('http://localhost:8080/api/v1/enrollment', testDefault)
    .then(response => {
      console.log(response.data.message);
    })
       
     } catch (error) {
       console.log(`Error: ${error}`)
     }
  
     
  
     
  
    }
    



  const defaultData = {
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
  };
  
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState(defaultData)
  

    

    function submitData(e){
      e.preventDefault();
      console.log(userData)
      setUserData("")

    }

  // const props = { setStep, submitData,userData, setUserData};
const props = {setStep, userData, setUserData};
  

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

    <div><button onClick={(e)=>postData(e)}>PostData</button></div>
    </>
  );
}