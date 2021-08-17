import Head from 'next/head'
import{ React, useState, useEffect} from 'react';
import{ faEnvelope, } from '@fortawesome/free-regular-svg-icons';
import{ faMap} from '@fortawesome/free-regular-svg-icons';
import { toast } from "react-toastify";
import { sendContactMail } from "../networking/apiCall" 
import axios from 'axios';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import "./contact.module.css";
 import styles from '../../styles/contact.module.css'
import TextField from '../propComponents/TextField'
import { faMarker } from '@fortawesome/free-solid-svg-icons';


toast.configure();

export default function ContactUs() {
    const [detail, setDetail] = useState({
        name:'',
        email:'',
        No:'',
        message:'',
        })

       async function submit(e){
           e.preventDefault();
           console.log(detail)
    
           
    
           let config = {
            method: 'post',
            url: `/api/contact`,
            headers: {
              'Content-Type': 'application/json',
            },
            data: detail,
          };
      
          try {
            const response = await axios(config);
            console.log(response);
            if (response.status == 200) {
              reset();
            //   toast(
            //     'success',
            //     'Thank you for contacting us, we will be in touch soon.'
            //   );
            toast.success("Email sent sucessfully", {
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            position: "bottom-right",
                            autoClose: 5000,
                          });
            }
          } catch (err) {
              console.log(err)
          }

       }
// async function submit(e){
//     e.preventDefault();
//     try{
//     const res = await sendContactMail(detail)
//     console.log(res)
//     }catch(err){
//         console.log(err)
//     }
//     if (res.status < 300) {
//         this.setState({
//             // formButtonDisabled: true,
//             formButtonText: "Thanks for your message",
//             name: "",
//             mail: "",
//             formContent: ""
//         })

//     } else {
//         this.setState({ formButtonText: "Please fill out all fields." })
//     }
// [7]
// }




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
                onChange={e =>setDetail({name:e.target.value, email:detail.email, No:detail.No , message:detail.message})} 
                value={detail.name}
                />
            </div>
            <div className={styles.form}>
                <div className={styles.formgroup}>
                    <input type="text" placeholder="Email" className={styles.formcontrole} name="email"
                    onChange={e =>setDetail({name:detail.name, email:e.target.value, No:detail.No , message:detail.message})}
                    value={detail.email}
                    />
                </div>
                <div className={styles.formgroup}>
                    <input type="text" placeholder="Phone No"className={styles.formcontrolp} name='No'
                    onChange={e =>setDetail({name:detail.name, email:detail.email, No:e.target.value , message:detail.message})}
                    value={detail.No}
                    />
                </div>
            </div>
            <div>
                <textarea type='text' placeholder="message" className={styles.msg} name='message'
                onChange={e =>setDetail({name:detail.name, email:detail.email, No:detail.No , message:e.target.value})}
                value={detail.message}
                ></textarea>
            </div>

            <div>
                <button className={styles.submit}>Send</button>
            </div>
            </form>
        </div>
        <div className={styles.box1}>
                <div className={styles.cntinf}> CONTACT INFO</div> 
                     <ul className={styles.ul}>< FontAwesomeIcon icon={faMap} className={styles.map}/>
                        <ul className={styles.loc}>
                        plot N3/447,IRC Village,<br></br>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29938.693952551792!2d85.79515192789019!3d20.286324079919837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d626fffc1d%3A0xe19f5ac0b78f8e62!2sNayapalli%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1626177707843!5m2!1sen!2sin"></iframe><a href="https://www.embedmymap.com/">Embed My Map</a>
                </div>
            </div>
        </div>

    </div>
        
    </>
  )
}