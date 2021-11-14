import SignUp from "../Component/parentsComnents/SignUp";
import { getCookies } from "../Component/config/FirebaseToken";
import { useRouter } from "next/router";
import { useEffect } from "react";


const Signup = (pageProps) => {
    const router = useRouter();
    
    useEffect(() => {
        if (getCookies()) {
         console.log('..........notlogin.....');
          router.push('./');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      if (!getCookies()) {
        return <SignUp {...pageProps} isPrivate />;
      }
    
      return null;

//   return (
//     <>
//       <SignUp />
//     </>
//   );
};

export default Signup;
