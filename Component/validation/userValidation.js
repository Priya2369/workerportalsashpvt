import * as yup from 'yup'
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




// validation for gender
// if(!gender){
//     errors.gender = " gender required"
// }

// validation for address
if(!address){
    errors.address = "address is required"
}

// validation for education
if(!education){
   errors.education = " please fill your education"
}







return errors

}



export default Validation;

 