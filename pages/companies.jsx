import FilterJob from '../Component/parentsComnents/FilterJob'
import Flex from '../Component/Flex'
import Singlejob from '../Component/parentsComnents/Singlejob'
import { getCookies } from "../Component/config/FirebaseToken";
import SignUp from '../Component/parentsComnents/SignUp'
import { useRouter } from "next/router";
import {useEffect} from "react"; 

const Company = (pageProps) =>{
    const router = useRouter();
    
    useEffect(() => {
        if (!getCookies()) {
         console.log('..........notlogin.....');
          router.push('/signup');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      if (getCookies()) {
        return <Singlejob {...pageProps} isPrivate />;
      }
    
      return null;
    // return(
    //     <>
    //     {getCookies()?
    //     <div><Singlejob/></div>:<div><SignUp/></div>}
        
    //     </>
    // )
}

export default Company;