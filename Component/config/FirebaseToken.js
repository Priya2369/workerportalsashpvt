import { useEffect, useContext } from 'react';
import firebase from "firebase/app";
import { userContext } from '../Header_Components/Header_Bottom'
import initFirebase from "./firebaseConfig";
import "firebase/auth";
import Cookies from 'universal-cookie';
import { SettingsInputSvideoRounded } from '@material-ui/icons';
import axios from "axios";
import { API_CONSTANTS } from "./apiConstant";
import { toast } from "react-toastify";
// import { useRouter } from 'next/router'

toast.configure();

export default async function tokenauth(detail,setOpen, setShow) {
  initFirebase();

  //  const router = useRouter();

  let phoneNumber = "+91" + detail.phoneNo;
  // console.log(phoneNumber);
  let appVerifier = window.recaptchaVerifier;
  try {
    setOpen(true)
    const confirmationResult = await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function(confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        if ((window.confirmationResult = confirmationResult)) {
          setShow(true)
        }
        // console.log(confirmationResult);
        // console.log("OTP is sent");
        return window.confirmationResult
      })
    return confirmationResult

  } catch (error) {
    // console.log(error);
    if(error.code==="auth/internal-error" ){
    toast.error("network errors", {
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "bottom-right",
      autoClose: 5000,
    });
  }else if(error.code ==="auth/invalid-phone-number"){
    toast.error("invalid phone number", {
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "bottom-right",
      autoClose: 5000,
    });
  }else{
    toast.error(error.message, {
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "bottom-right",
      autoClose: 5000,
    });
  }

  };

}
export function otpModule(otp, router, dispatch,  setOpen,showHeader, setShowHeader) {
 
  const cookies = new Cookies();
  // const {state, dispatch} = useContext(userContext)
  
  // console.log(otp);
  let otpInput =
    otp.otp1;
  let optConfirm = window.confirmationResult;

  // console.log(codee);
  optConfirm
    .confirm(otpInput)
    .then(async function(result) {
      // console.log("User signed in successfully.");
      toast.success("OTP verified", {
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        position: "bottom-right",
        autoClose: 5000,
      });

      // console.log("Result" + result.verificationID);
      let user = result.user;
       let userToken = await firebase.auth().currentUser.getIdToken(true);
      //  console.log(userToken)
      // console.log(user.getIdToken(true))
      // console.log(user.getIdToken())
      // console.log(user);
      // setCookies();
      setCookies.then(() => {
        const cookies = getCookies()
        // console.log(cookies);
        // dispatch({type:'USER', payload: true})
        // if(user){
        // dispatch({type:'USER', payload: true})
        // console.log("get data runing")
        try {
          if (user) {
            // console.log(cookies)
            const reqUrl =
              API_CONSTANTS.baseUrl + API_CONSTANTS.enrollment.SELF_PROFILE;
            axios.get(reqUrl, {
              headers: {
                // authorization:cookies.get('access_token') ,
                authorization:userToken,
              },
            }).then((res) => {
              // console.log(res.data.data);
              if (!res.data.data) {
                router.push("/registration");
              } else if (res.data.data) {
               
                // console.log(res.data.data);
                localStorage.setItem("user_info",JSON.stringify(res.data.data))
                
                router.push("/jobs");
                setShowHeader(true);
              }
            }).catch(error =>
               console.log(error.message));

          }
        } catch (error) {
          // console.log("profile" + error);
        }

        // getData()
        // router.push('/registration');

        // }
      })
    })
    .catch(function(error) {
      // console.log(error);
      
      toast.error("Incorrect OTP", {
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        position: "bottom-right",
        autoClose: 5000,
      });

    });
  
}



export let setCookies = new Promise((resolve, reject) => {
  initFirebase()
  const cookies = new Cookies();
  // console.log("set cookies")
  firebase.auth().onIdTokenChanged(async user => {
    if (user) {
      const token = await user.getIdToken(true);
      cookies.set('access_token', token, { path: '/', maxAge: 60 * 60 });
    }
  });
  // console.log(cookies);
  return resolve(true)
})


export function getCookies() {
  const cookies = new Cookies()
  // console.log("getcookies")
  initFirebase();

  // console.log(cookies);
  return cookies.get('access_token');
}


//   export function logout(){
//     // const {state, dispatch} = useContext(userContext)
//     const cookies = new Cookies();
//     // firebase.auth.signOut().then(
//     // cookies.remove('access_token'))
//     firebase.auth().signOut()
// .then(() => {
//   console.log('Signed Out');
//   cookies.remove('access_token')
//   // dispatch({type:'USER', payload: false})

// })
// .catch(e=>{
//  console.error('Sign Out Error', e);
// });

//   }




