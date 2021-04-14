// import react, {useState} from 'react'
// import styles from '../../styles/registration.module.css'
// import { useForm, useStep } from "react-hooks-helper";
// import Profile from '../propComponents/Profile'
// import JobDescription from '../propComponents/JobDescription'
// import Education from '../propComponents/Education'
// import TermCondition from '../propComponents/TermCondition'

// // const defaultData = {
// //     fullName: "",
// //     date: "",
// //     phoneNo: "",
// //     gender: "",
// //     age: "",
// //     email: "",
// //     adress: "",
// //     pincode: "",
// //     city: "",
// //     state:"",
// //     country:"",
// //   };


  

  
// export default function Registration() {
// const [active, setActive] = useState("FirstCard")
// const [count, setCount] = useState(1)




//     return (
//         <>
//             <div className={styles.tab}>
                
//                 <button className={styles.tablinks} onClick={()=>setActive("FirstCard")}>Profile</button>
//                 <button className={styles.tablinks} onClick={()=>setActive("SecondCard")}>Education</button>
//                 <button className={styles.tablinks} onClick={()=>setActive("ThirdCard")}>Job Description</button>
//                 <button className={styles.tablinks} onClick={()=>setActive("FourthCard")}>Terms & Conditions</button>
//                 <button>next</button>
//             </div>

//             <div>
//                  {active === "FirstCard" && <Profile />}
//                {active === "SecondCard" && <Education />}
            
//                 {active === "ThirdCard" &&  <JobDescription />}
//                 {active === "FourthCard" &&  <TermCondition />}
           
//            </div>
          


//         </>
//     )
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
