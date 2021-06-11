import { useEffect, useContext } from 'react';
import firebase from "firebase/app";
import { userContext } from '../Header_Components/Header_Bottom'
import initFirebase from "./firebaseConfig";
import "firebase/auth";
import Cookies from 'universal-cookie';
import { SettingsInputSvideoRounded } from '@material-ui/icons';
import axios from "axios";
import { API_CONSTANTS } from "./apiConstant";
// import { useRouter } from 'next/router'



export default async function tokenauth(detail, setShow) {
  initFirebase();

  //  const router = useRouter();

  let phoneNumber = "+91" + detail.phoneNo;
  console.log(phoneNumber);
  let appVerifier = window.recaptchaVerifier;
  try {
    const confirmationResult = await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function(confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        if ((window.confirmationResult = confirmationResult)) {
          setShow(true);
        }
        // console.log(confirmationResult);
        console.log("OTP is sent");
        return window.confirmationResult
      })
    return confirmationResult

  } catch (error) {
    console.log(error);
  };

}
export function otpModule(otp, router, dispatch, setNaShow, setOpen) {
  const cookies = new Cookies();
  // const {state, dispatch} = useContext(userContext)
  console.log(otp);
  let otpInput =
    otp.otp1;
  let optConfirm = window.confirmationResult;

  // console.log(codee);
  optConfirm
    .confirm(otpInput)
    .then(function(result) {
      console.log("User signed in successfully.");
      // console.log("Result" + result.verificationID);
      let user = result.user;
      // const token = firebase.auth().currentUser.getIdToken(true))
      console.log(user.getIdToken())
      console.log(user);
      // setCookies();
      // setCookies.then(() => {
        const cookies = getCookies()
        console.log(cookies);
        // dispatch({type:'USER', payload: true})
        // if(user){
        // dispatch({type:'USER', payload: true})
        console.log("get data runing")
        try {
          if (user) {
            console.log(cookies)
            const reqUrl =
              API_CONSTANTS.baseUrl + API_CONSTANTS.enrollment.SELF_PROFILE;
            axios.get(reqUrl, {
              headers: {
                // authorization:cookies.get('access_token') ,
                authorization: cookies,
              },
            }).then((res) => {
              console.log(res.data.data);
              if (!res.data.data) {
                router.push("/registration");
              } else if (res.data.data) {
                setNaShow(true);
                router.push("/jobs");
              }
            }).catch(error => console.log(error.message));

          }
        } catch (error) {
          console.log("profile" + error);
        }

        // getData()
        // router.push('/registration');

        // }
      })
    // })
    .catch(function(error) {
      console.log(error);
      alert("Incorrect OTP");
    });
}

// export function setCookies() {
//   const cookies = new Cookies();
//   console.log("set cookies")
//   firebase.auth().onIdTokenChanged(async user => {
//     if (user) {
//       const token = await user.getIdToken(true);
//       cookies.set('access_token', token, { path: '/', maxAge: 60 * 60 });
//     }
//   });
// }

// export let setCookies = new Promise((resolve, reject) => {
//   initFirebase()
//   const cookies = new Cookies();
//   console.log("set cookies")
//   firebase.auth().onIdTokenChanged(async user => {
//     if (user) {
//       const token = await user.getIdToken(true);
//       console.log(true)
//       cookies.set('access_token', token, { path: '/', maxAge: 60 * 60 });
//     }
//   });
//   console.log(cookies);
//   return resolve(true)
// })

(function setCookies(){
  initFirebase()
  const cookies = new Cookies();
  console.log("set cookies")
  firebase.auth().onIdTokenChanged(async user => {
    if (user) {
      const token = await user.getIdToken(true);
      console.log(true)
      cookies.set('access_token', token, { path: '/', maxAge: 60 * 60 });
    }
  });
  console.log(cookies);
})();


export function getCookies() {
  const cookies = new Cookies()
  console.log("getcookies")
  initFirebase();

  console.log(cookies);
  console.log(cookies.get('access_token'))
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




