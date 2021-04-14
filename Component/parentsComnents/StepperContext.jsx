import Stepper from './Stepper'
import { useState, createContext } from "react";

export const multiStepcontext = createContext();
const StepperContext = () => {

    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([])
    const [finalData, setFinalData] = useState([])
    return (
        <>
            <multiStepcontext.Provider value={{ currentStep, setStep, userData, setUserData, finalData, setFinalData }}>
                <Stepper />
            </multiStepcontext.Provider>
        </>
    )
}

export default StepperContext;