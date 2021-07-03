 import ProfileUpdate from '../Component/parentsComnents/ProfileUpdate'
import NewUser from '../Component/parentsComnents/NewUser'
import { getCookies } from "../Component/config/FirebaseToken";
import SignUp from '../Component/parentsComnents/SignUp' 
// import styles from '../styles/profile.module.css';
import Link from 'next/link'

const profile = () =>{
console.log("mklop")

    return(
        <>
        {getCookies()?
        
         
         
         <ProfileUpdate/>
         
        :<SignUp/>
        
       
        
      }
        </>
    )
}

export default profile;