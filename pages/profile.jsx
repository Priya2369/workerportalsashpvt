 import ProfileUpdate from '../Component/parentsComnents/ProfileUpdate'
import { getCookies } from "../Component/config/FirebaseToken";
import { useRouter } from "next/router";
import {useEffect} from "react";
import SignUp from '../Component/parentsComnents/SignUp' 


const profile = (pageProps) =>{
  const router = useRouter();

  useEffect(() => {
    if (!getCookies()) {
     console.log('..........notlogin.....');
      router.push('/signup');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (getCookies()) {
    return <ProfileUpdate {...pageProps} isPrivate />;
  }

  return null;
    // return(
    //     <>
    //     {getCookies()?
        
         
         
    //      <ProfileUpdate/>
         
    //     :<SignUp/>
        
       
        
    //   }
    //     </>
    // )
}

export default profile;