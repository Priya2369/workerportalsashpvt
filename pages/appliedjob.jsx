 
import Applied from '../Component/parentsComnents/Applied'
import { getCookies } from "../Component/config/FirebaseToken";
import SignUp from '../Component/parentsComnents/SignUp' 

const AppliedJob = () =>{


    return(
        <>{getCookies()?
        <div> 
         
         
         <Applied/>
         
        </div>:<div><SignUp/></div>}
        </>
    )
}

export default AppliedJob;