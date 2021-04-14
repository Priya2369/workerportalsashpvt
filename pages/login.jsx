import Login from '../Component/parentsComnents/Login' 
import styles from '../styles/login.module.css'

const LogIn = () =>{
    return(
        <div className={styles.top}> 
            {/* <h1>Welcome to Our Portal</h1>  */}
         <Login/>
        </div>
    )
}

export default LogIn;