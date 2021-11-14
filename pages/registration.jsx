 
import NewUser from '../Component/parentsComnents/NewUser'
import { getCookies } from "../Component/config/FirebaseToken";
import { useRouter } from "next/router";
import {useEffect} from "react"; 

const Registration = (pageProps) =>{
    const router = useRouter();
    
    useEffect(() => {
        if (!getCookies()) {
         console.log('..........notlogin.....');
          router.push('/signup');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      if (getCookies()) {
        return <NewUser {...pageProps} isPrivate />;
      }
    
      return null;

    // return(
    //     <>{getCookies()?
    //     <div > 
         
         
    //      <NewUser/>
         
    //     </div>:<div><SignUp/></div>}
    //     </>
    // )
}

export default Registration;