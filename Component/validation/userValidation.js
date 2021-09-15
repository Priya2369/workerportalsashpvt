import * as yup from 'yup'
import { calculateAge } from "../config/calculateAge";

const Validation = values =>{
    
    let { firstName,
        lastName,
        date,
        
        gender,
        
        email,
        address,
        
        education,
        } = values;
let errors = {};
if(!firstName){
    errors.firstName = " First name is required"
}else if (firstName.trim().length<4 || firstName.trim().length>20 || !/^[a-z ]([a-z,.'-]*)+(\s[a-z,.'-]+)*$/i.test(values.firstName)){
    errors.firstName ="First name should be alphabetic and atleast 4-20 character long"
}

if(!lastName){
    errors.lastName = "Last name is required"
}else if (lastName.trim().length<3 || lastName.trim().length>20 || !/^[a-z ]([a-z,.'-]*)+(\s[a-z,.'-]+)*$/i.test(values.lastName)){
    errors.lastName ="last name should be alphabetic and atleast 4-20 character long"
}


if(!date){
    errors.date = "Date Is Required"
}else if( calculateAge(date)>80 || calculateAge(date)<16){
    errors.date = " Not eligible"
}

// Validation for email
if(!email){
    errors.email = " Email is required"
}else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email = "Email is invalid"
}




// validation for gender
// if(!gender){
//     errors.gender = " gender required"
// }

// validation for address
if(!address){
    errors.address = "Address is required"
}

// validation for education
if(!education){
   errors.education = "Education is required"
}







return errors

}



export default Validation;

 