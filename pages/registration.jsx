 
import NewUser from '../Component/parentsComnents/NewUser'
import { getCookies } from "../Component/config/FirebaseToken";
import SignUp from '../Component/parentsComnents/SignUp' 
import styles from '../styles/Registration.module.css'
const Registration = () =>{
console.log("mklop")

    return(
        <>{getCookies()?
        <div > 
         
         
         <NewUser/>
         
        </div>:<div><SignUp/></div>}
        </>
    )
}

export default Registration;