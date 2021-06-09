import * as yup from 'yup'
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
}else if (firstName.length<4 || firstName.length>20 || !/^[a-z]([a-z,.'-]*)+(\s[a-z,.'-]+)*$/i.test(values.firstName)){
    errors.firstName ="First name should be alphabetic and atleast 4-20 character long"
}

if(!lastName){
    errors.lastName = "Last Name is required"
}else if (lastName.length<3 || lastName.length>20 || !/^[a-z]([a-z,.'-]*)+(\s[a-z,.'-]+)*$/i.test(values.lastName)){
    errors.lastName ="last name should be alphabetic and atleast 4-20 character long"
}

// Validation for email
if(!email){
    errors.email = " email is required"
}else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email = "Email is invalid"
}



// validation for age 
if(!age){
    errors.age = "please fill the field"
}else if(age<14 || age>80){
    errors.age = "age should be between 15-80"
}

// validation for gender
if(!gender){
    errors.gender = " gender required"
}

// validation for address
if(!address){
    errors.address = "address is required"
}

// validation for education
if(!education){
   errors.education = " please fill your education"
}


// if(!yearGap){
//     errors.yearGap = "please fill the field"
//     }

 if(!collegeUniversity){
        errors.collegeUniversity = "please fill the field"
}


if(!CGPAPercentage){
    errors.CGPAPercentage = "please fill the field"
}

if(!interestArea){
    errors.interestArea = "please fill the field"
}

// if(!prefferedLocation){
//     errors.prefferedLocation = "please fill the field"
// }

if(!sector){
    errors.sector = "please fill the field"
}

if(!skill){
    errors.skill = "please fill the field"
}

if(!experience){
    errors.experience = "please fill the field"
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