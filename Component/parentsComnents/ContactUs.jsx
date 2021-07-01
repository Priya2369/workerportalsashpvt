import Head from 'next/head'
import{ React, useState, useEffect} from 'react';
import{ faEnvelope, } from '@fortawesome/free-regular-svg-icons';
import{ faMap} from '@fortawesome/free-regular-svg-icons';


import emailjs from 'emailjs-com'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import "./contact.module.css";
 import styles from '../../styles/contact.module.css'
import TextField from '../propComponents/TextField'
import { faMarker } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
    // const [detail, setDetail] = useState({
    //     name:'',
    //     email:'',
    //     No:'',
    //     message:'',
    //     })

       function submit(e){
           e.preventDefault();
           console.log(e.target.value)
           emailjs.sendForm('service_sfm7kik','template_mt9b19e',e.target,"user_NxU5uNQCWbHXT7BrIW4r3")
           .then(res=>{
               console.log(res);
           }).catch(error=>(console.log(error)))
           
    //        try{
    //         window.Email.send({
    //             SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    //             To : detail.email,
    //             From : "you@isp.com",
    //             Subject : "This is the subject",
    //             Body : detail.message + detail.Fname
    //         }).then(
    //             message => alert(message))
               
    //     }catch (error) {
    //      console.log(error);
    //    }


       }



    //    ...............................

        useEffect(()=>{
            
        })
  return (
    <>
    <div className={styles.cont}>
        <div className={styles.box}>
            <form onSubmit={e =>submit(e)}>
            <div >
                <input type="text" placeholder="Full Name"className={styles.fullName} name="name"
                // onChange={e =>setDetail({Fname:e.target.value, email:detail.email, No:detail.No , message:detail.message})} 
                // value={detail.Fname}
                />
            </div>
            <div className={styles.form}>
                <div className={styles.formgroup}>
                    <input type="text" placeholder="Email" className={styles.formcontrole} name="user_email"
                    // onChange={e =>setDetail({Fname:detail.Fname, email:e.target.value, No:detail.No , message:detail.message})}
                    // value={detail.email}
                    />
                </div>
                <div className={styles.formgroup}>
                    <input type="number" placeholder="Phone No"className={styles.formcontrolp} name='number'
                    // onChange={e =>setDetail({Fname:detail.Fname, email:detail.email, No:e.target.value , message:detail.message})}
                    // value={detail.No}
                    />
                </div>
            </div>
            <div>
                <textarea type='text' placeholder="message" className={styles.msg} name='message'
                // onChange={e =>setDetail({Fname:detail.Fname, email:detail.email, No:detail.No , message:e.target.value})}
                // value={detail.message}
                ></textarea>
            </div>

            <div>
                <button className={styles.submit}>Send</button>
            </div>
            </form>
        </div>
        <div className={styles.box1}>
                <div className={styles.cntinf}> Contact Info</div> 
                     <ul className={styles.ul}>< FontAwesomeIcon icon={faMap} className={styles.map}/>
                        <ul className={styles.loc}>
                        plot 1109/19,Siba Nager(S.N-24),<br></br>
                        Badagada Brit Colony,Khordha,<br></br>
                        Bhubaneswar,Odisha-751018(IN)<br></br><br></br>
                        </ul>

                     </ul> 
                    <div className={styles.inf}>
                        
                        <ul ><FontAwesomeIcon icon={faEnvelope} className={styles.env}/>

                        info@mosahay.info
                        </ul>
                    </div> 
            <div className={styles.mapouter}>
                <div className={styles.gmap_canvas}>
                    <iframe className={styles.gmap_iframe} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" 
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.embedmymap.com/">Embed My Map</a>
                </div>
            </div>
        </div>

    </div>
        
    </>
  )
}