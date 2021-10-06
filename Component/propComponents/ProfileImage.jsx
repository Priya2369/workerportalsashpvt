import React , {useState} from 'react';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ProfileImage(){
  //Pop Button
  const [open, setOpen] = useState(false);
  const [fileInputState,setFileInputState]=useState("");
  const [selectedFile,setSelectedFile] =useState("");
  const [previewSource,setPreviewSource]=useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //input image
     const HandleFileInputChange= (value) =>{
        const file= value.target.files[0];
        previewfile(file);
     }
     const previewfile = (file) =>{
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onloadend = () =>{
             setPreviewSource(reader.result);
         }
     }
 
    const handleSubmitfile=(value) =>{
        console.log('submiting image')
        value.preventDefault();
        if(!previewSource) return;
        uploadImage(previewSource);
    }
    const uploadImage=(img)=>{
        console.log(img);
    }
    return(
        <>
            <div>
            {/* <img src="./4.png"  /> */}
            {previewSource && (
                <img src={previewSource} alt="img" />
            )}
            <CameraAltIcon  onClick={handleClickOpen}/>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogContent>
          <DialogContentText>
          <div>
            <form onSubmit={handleSubmitfile}>
                <input type="file" name="image" onChange={HandleFileInputChange} value={fileInputState}/>
                <button type="submit">Save</button>
            </form> 
            
            </div>

          </DialogContentText>
         
        </DialogContent>
            </Dialog>
            {/* <form>
                <input type="file" name="image"  />
            </form> */}
            </div>
        </>
    )
}