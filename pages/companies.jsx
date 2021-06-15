import FilterJob from '../Component/parentsComnents/FilterJob'
import Flex from '../Component/Flex'
import Singlejob from '../Component/parentsComnents/Singlejob'
import { getCookies } from "../Component/config/FirebaseToken";
import SignUp from '../Component/parentsComnents/SignUp' 

const Company = () =>{
    return(
        <>
        {getCookies()?
        <div><Singlejob/></div>:<div><SignUp/></div>}
        
        </>
    )
}

export default Company;