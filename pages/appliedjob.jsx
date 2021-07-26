 
import Applied from '../Component/parentsComnents/Applied'
import { getCookies } from "../Component/config/FirebaseToken"; 
import { useRouter } from "next/router";
import {useEffect} from "react";

const AppliedJob = (pageProps) =>{

    const router = useRouter();
    
    useEffect(() => {
        if (!getCookies()) {
         console.log('..........notlogin.....');
          router.push('/signup');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      if (getCookies()) {
        return <Applied {...pageProps} isPrivate />;
      }
    
      return null;
    // return(
    //     <>{getCookies()?
    //     <div> 
         
         
    //      <Applied/>
         
    //     </div>:<div><SignUp/></div>}
    //     </>
    // )
}

export default AppliedJob;