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


export default function CvUpload(props) {
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState(false);
  const [resume, setResume] = useState(false);
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
      reader.addEventListener("load", () => {
        setResume(reader.result);
      });
      //   setOpen(true);
    }
  };
  function openCvCard(e) {
    e.preventDefault();
    setOpen(true);
  }
  const onUpload = async (e) => {
    e.preventDefault();

    try {
      const data = {
        candidateCV: resume,
      };
      const reqUrl =
        API_CONSTANTS.baseUrl + API_CONSTANTS.enrollment.WORKER_CV_UPLOAD;

      const res = await axios.put(reqUrl, data, {
        headers: {
          // authorization:cookies.get('access_token') ,
          authorization: getCookies(),
        },
      });

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div onClick={openCvCard}>Upload Your resume</div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >


       
         
            <h2 className={styles.hover}>Attach Resume</h2>

          
             < DialogContent className={styles.fulDiv} > 
             <UploadFileIcon/>

            <input
              type="file"
              accept=".pdf"
              ref={inputRef}
              onChange={onSelectFile}
              style={{ display: "none" }}
            />

            <div  onClick={triggerFileSelectPopup}>
            
            {/* <UploadFileIcon/> */}
            <button style={{ backgroundColor:"#53b427", color:"white", fontSize:"20px",
             height:"25%" ,width:"35%",px:"4" ,py:"5",
             borderRadius: "4px" ,
             border:"none",
             mx:"5"
            }}
            // onClick={triggerFileSelectPopup}
            >upload resume</button>
            </div>

            <button style={{ backgroundColor:"#0056a2", color:"white", fontSize:"20px",
             height:"8%" ,width:"20%",px:"4" ,py:"3",
             borderRadius: "4px" ,
             border:"none"
            }}
              onClick={onUpload} type="submit">
              save
            </button>

            {fileName}
          </ DialogContent >
       
      </Dialog>
    </>
  );
}
