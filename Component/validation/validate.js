import * as yup from 'yup'

import { calculateAge } from "../config/calculateAge";

const Validation = values =>{
    let { firstName,
        lastName,
        date,
        
        gender,
        age,
        email,
        address,
        
        education,
        specialization,
        PassingYear,
        yearGap,
        collegeUniversity,
        CGPAPercentage,
        interestArea,
        prefferedLocation,
        sector,
        skill,
        experience,
        termCondition } = values;
let errors = {};
if(!firstName){
    errors.firstName = " First Name is required"
}else if (firstName.trim().length<4 || firstName.trim().length>20 || !/^[a-z ]([a-z,.'-]*)+(\s[a-z,.'-]+)*$/i.test(values.firstName)){
    errors.firstName ="First name should be alphabetic and atleast 4-20 character long"
}

if(!lastName){
    errors.lastName = "Last Name is required"
}else if (lastName.trim().length<3 || lastName.trim().length>20 || !/^[a-z ]([a-z,.'-]*)+(\s[a-z,.'-]+)*$/i.test(values.lastName)){
    errors.lastName ="last name should be alphabetic and atleast 4-20 character long"
}


// Validation for email
if(!email){
    errors.email = " email is required"
}else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email = "Email is invalid"
}



// validation for date
if(!date){
    errors.date = "Date Is Required"
}else if( calculateAge(date)>80 || calculateAge(date)<16){
    errors.date = " Not Eligible"
}


// validation for gender
if(!gender){
    errors.gender = " Gender Required"
}

// validation for address
if(!address){
    errors.address = "Address is Required"
}

// validation for education
if(!education){
   errors.education = " please Fill Your Education"
}


if(yearGap<0 || yearGap>50){
    errors.yearGap = "Must be a safe number"
    }

 if(!collegeUniversity){
        errors.collegeUniversity = "Please Fill The Field"
}


if(!CGPAPercentage){
    errors.CGPAPercentage = "Please Fill The Field"
}


// if(!prefferedLocation){
//     errors.prefferedLocation = "please fill the field"
// }

if(!sector){
    errors.sector = "Please Fill The Field"
}

if(!skill){
    errors.skill = "Please Fill The Field"
}

if(experience>40 || experience<0 ){
    errors.experience = "Must be a safe number"
}





return errors

}



export default Validation;

 
// export default {
//    profile: yup.object().shape({
//         firstName: yup.string()
//         .required('please enter your first name')
//         .max(30,"Name sdhould not exceed 30 charecters")
//         .min(4,"min length should be 4 characters")
//     })
// }