import * as yup from 'yup'
const Validation = userDatas =>{
    let { firstName,
        lastName,
        date,
        phoneNo,
        gender,
        age,
        email,
        address,
        pincode,
        city,
        state,
        country,
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
        termCondition } = userDatas;
let errors = {};
if(!firstName){
    errors.firstName = " First Name is required"
}else if (firstName.length<4 || firstName.length>20 || !/^[a-z]([a-z,.'-]*)+(\s[a-z,.'-]+)*$/i.test(userDatas.firstName)){
    errors.firstName ="First name should be alphabetic and atleast 4-20 character long"
}

if(!lastName){
    errors.lastName = "Last Name is required"
}else if (lastName.length<3 || lastName.length>20 || !/^[a-z]([a-z,.'-]*)+(\s[a-z,.'-]+)*$/i.test(userDatas.lastName)){
    errors.lastName ="last name should be alphabetic and atleast 4-20 character long"
}

// Validation for email
if(!email){
    errors.email = " email is required"
}else if(!/\S+@\S+\.\S+/.test(userDatas.email)){
    errors.email = "Email is invalid"
}

// validation for mobile number 
if (!phoneNo){
    errors.phoneNo = " please fill the field"
}else if (phoneNo.length>10 || phoneNo.length<10 || !/^[6-9]+[0-9]+$/.test(userDatas.phoneNo)){
    errors.phoneNo = "invalid mobile number"
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
// validation for specialization
if(!specialization){
errors.specialization = "please fill the field"
}

if(!yearGap){
    errors.yearGap = "please fill the field"
    }

 if(!collegeUniversity){
        errors.collegeUniversity = "please fill the field"
}


if(!CGPAPercentage){
    errors.CGPAPercentage = "please fill the field"
}

if(!interestArea){
    errors.interestArea = "please fill the field"
}

if(!prefferedLocation){
    errors.prefferedLocation = "please fill the field"
}

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