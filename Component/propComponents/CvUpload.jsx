import { useState, useRef, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from "@material-ui/core/DialogContentText";
import styles from "../../styles/CvUpload.module.css";
import { API_CONSTANTS } from "../../Component/config/apiConstant";
import { getCookies } from "../../Component/config/FirebaseToken";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import axios from "axios";
import Spinner from "./ReactSpinner";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from '@mui/icons-material/Close';
toast.configure();

export default function CvUpload(props) {
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState(false);
  const [resume, setResume] = useState(false);
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const inputRef = useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const handleClose = () => {
    setOpen(false);
  };

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      setFileName(event.target.files[0].name);
      console.log(event.target.files[0])
      reader.addEventListener("load", () => {
        setResume(reader.result);
        
        onUpload(reader.result);
      });
      //   setOpen(true);
    }
  };
  function openCvCard(e) {
    e.preventDefault();
    setOpen(true);
  }
  const onUpload = async (cvData) => {
   
    // e.preventDefault();
// console.log(resume)
    try {
      const data = {
        candidateCV: cvData
      };
      const reqUrl =
        API_CONSTANTS.baseUrl + API_CONSTANTS.enrollment.WORKER_CV_UPLOAD;

      const res = await axios.put(reqUrl, data, {
        headers: {
          // authorization:cookies.get('access_token') ,
          authorization: getCookies(),
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });
      if(res.data){
      // setTimeout(() => setUploadPercentage(0), 10000);
      toast.success("Resume Uploaded sucessfully", {
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        position: "bottom-right",
        autoClose: 5000,
      });
      setUploadPercentage(0)
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
      if(error.response){
        toast.error(error.response.message, {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          position: "bottom-right",
          autoClose: 5000,
        });
      }else{
      toast.error(error, {
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        position: "bottom-right",
        autoClose: 5000,
      });
    }
    }
  };
  return (
    <>
       <button className={styles.cv} onClick={openCvCard}><a>Upload Your resume</a></button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >


       
         
            <h2 className={styles.hov}>Attach Resume</h2>

          
             < DialogContent className={styles.fulDiv} > 
             

<div className={styles.r}>
            <div className={styles.e}>
              <div className={styles.s}>


                <img className={styles.u} src="./upload.png" alt="image" />
                
                <div >
                <div className={styles.m}  onClick={triggerFileSelectPopup}>Select Files</div>

                
              
              <input type="file"
               accept=".pdf"
               ref={inputRef}
               onChange={onSelectFile}
               style={{ display: "none" }} />
               <div className={styles.p}>
                <div className={styles.g}></div>
                <div className={styles.b} style={{ width:`${uploadPercentage}%`}}></div>
              </div>
               
              </div>
              </div>
              {/* {fileName} */}
            </div>
          
          </div>
          
          </ DialogContent >
       
      </Dialog>
    </>
  );
}
