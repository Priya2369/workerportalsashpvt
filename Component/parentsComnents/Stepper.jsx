import React, { useContext,createContext,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import styles from '../../styles/registration.module.css'


import Profile from '../propComponents/Profile'
import JobDescription from '../propComponents/JobDescription'
import Education from '../propComponents/Education'
import TermCondition from '../propComponents/TermCondition'
// import { multiStepcontext } from './StepperContext';


export default function StepperForm() {
  const defaultData = {
    fullName: "",
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
  const [active, setActive] = useState("FirstCard")
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState(defaultData)
    const [finalData, setFinalData] = useState([])

    

    function submitData(e){
      e.preventDefault();
      console.log(userData)
      setUserData("")

    }

  const props = { setStep, submitData,userData, setUserData }; 

  

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