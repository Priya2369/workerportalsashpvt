
import styles from '../../styles/Singlejob.module.css'

const Singlejob = () =>{
    return(
        <>
          <div className={styles.sigjob}>
            {/* jobcard */}
          <div className={styles.ARAPL}>
               
               <ul className={styles.ul}>
                 <li className={styles.li}><div className={styles.Square}></div></li>
                   <li className={styles.li}>ARAPL
                    Software Engineer</li>
                   <li className={styles.li}>Pune</li>
                   <li className={styles.li}>13000-50000</li>
               </ul>
            </div><br/><br/>

            {/* Job Description */}
            <div className={styles.Description}>
                <h2 className={styles.h2}>Job Description</h2>
                <p className={styles.p}>It is a long established fact that a reader will beff distracted by vbthe
                creadable content of a page when looking as its layout.The point of using
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, ad.</p>
                <h2 className={styles.h2}>Required Knowledege,Skills and Abilities</h2>
                <ul type="star">
                  <li>System Software Development.</li>
                  <li>Mobile Application iOS/Android/Tizen or other platform.</li>
                  <li>Research and code,libraries,APIs and frameworks.</li>
                  <li>Strong knowledge on software development cycle.</li>
                  <li>Strong problem solving and debugging skills.</li>

                </ul>
               
                <h2 className={styles.h2}>Education + Experience</h2>
                <ul className={styles.ul}>
                    <li>3 or more years of professional design experience.</li>
                    <li>Direct response email experience.</li>
                    <li>Ecommerce website design experience.</li>
                    <li>Familiarity with mobile and web apps preferred.</li>
                    <li>Experience using vision a plus.</li>
                </ul>
              </div>

            {/* job Overview */}
            <div className={styles.Overview}>
              <h2 className={styles.h2}>Job Overview</h2>
                <div className={styles.p}>
                  <p>Posted Date:&nbsp; &nbsp; &nbsp; &nbsp;1 Mar 2021</p>
                  <p>Vacancy : &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;30</p>
                  <p>Job Nature :&nbsp; &nbsp;&nbsp; &nbsp; Full Time</p>
                  <p>Salary : &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;35000 yearly</p>
                  <p>Application date:&nbsp; &nbsp;&nbsp; 1 May 2021</p>
                  <button type="button" className={styles.Submit}>Apply Now</button>
                </div>
            </div>

            {/* Conpnay Details */}
            <div className={styles.Information}>
    
              <h3 className={styles.h3}>Company Information</h3>
              <h3 className={styles.h3}>ARAPL</h3>
                <div className={styles.p}>
                  <p>It is a long established that a<br/>
                  reader will be distracted by the<br/> readable content of a page when <br/>looking as its layout</p>

                  <p ><b>name:</b>&nbsp; &nbsp; ARAPL</p>
                  <p ><b>Web:</b> &nbsp; &nbsp;&nbsp;arapl.com</p>
                  <p ><b>Email :</b>&nbsp; &nbsp;&nbspcontact@arapl.com</p>
                </div>
            </div>
            
        
            

     
            
            </div>     
        </>
    )
}

export default Singlejob;