import { useEffect} from 'react';
import firebase from "firebase/app";

import initFirebase from "./firebaseConfig";
import "firebase/auth";
import Cookies from 'universal-cookie';
import { SettingsInputSvideoRounded } from '@material-ui/icons';
// import { useRouter } from 'next/router'



export default async function  tokenauth  (detail,setShow){
    initFirebase(); 

    //  const router = useRouter();

    let phoneNumber = "+91" + detail.phoneNo;
    console.log(phoneNumber);
    let appVerifier = window.recaptchaVerifier;
    try{
   const confirmationResult = await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        if((window.confirmationResult = confirmationResult)){
           setShow(true);
        }
        // console.log(confirmationResult);
        console.log("OTP is sent");
        return window.confirmationResult
      })
return confirmationResult
      
    }catch(error) {
        console.log(error);
      };
 
}
export function otpModule (otp, router){
    console.log(otp);
    let otpInput =
      otp.otp1 + otp.otp2 + otp.otp3 + otp.otp4 + otp.otp5 + otp.otp6;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then(function (result) {
        console.log("User signed in successfully.");
        
        // console.log("Result" + result.verificationID);
        let user = result.user;
        // const token = firebase.auth().currentUser.getIdToken(true))
        console.log(user.getIdToken())
        console.log(user);
        
        setCookies();
        router.push('/profile');

       
        
      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");
      });
}

export function setCookies(){
    const cookies = new Cookies();

    return firebase.auth().onIdTokenChanged(async user => {
        if (user) {
            const token = await user.getIdToken(true);
            cookies.set('access_token', token, { path: '/', maxAge: 60 * 60});
        }
    });
}

// export const CookieProvider = () => {
//   initFirebase(); 

//   const cookies = new Cookies();
//   useEffect(() => {
//   return firebase.auth().onIdTokenChanged(async user => {
//     if (user) {
    
//     const token = await user.getIdToken();
//           cookies.set('acess_token', token, { path: '/',  maxAge: 60 * 60});
//           console.log("new cookies")
//     }
//   });
// });

// }
export  function getCookies (){
  const cookies = new Cookies()
  
  initFirebase();

  // setCookies();
  //   async function  cookieGetter(){
  //  return cookies.get('access_token')
  // }
  // const cookieValue = await cookieGetter()
  // .then((value)=>{
    // const  = value
    //  console.log(value)
    
    // })
    // const cookieValue = cookies.get('access_token')

    if ( typeof cookies.get('access_token') == 'undefined'){
      setCookies();
      return cookies.get('access_token')
    }else{
      return cookies.get('access_token');
    }
  // console.log("value = "+cookieValue)
  // cookieValue.then((value)=>{return value})

  // return cookieValue;




}