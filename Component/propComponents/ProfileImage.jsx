import React , {useState , useCallback} from 'react';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from '../../styles/profileImage.module.css'
import Cropper from 'react-easy-crop'

export default function ProfileImage(){
  //Pop Button
  const [open, setOpen] = useState(false);
  
  const [fileInputState,setFileInputState]=useState("");
  const [selectedFile,setSelectedFile] =useState("");
  const [previewSource,setPreviewSource]=useState();

 // image crop
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, []) 
 // Image crop end

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
            {/* <div className={styles.cam}> */}
            <CameraAltIcon className={styles.cam}  onClick={handleClickOpen}/>
            {/* </div> */}
            <Dialog   open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogContent  >
          <DialogContentText className={styles.fulDiv} >
          <div >
            <form onSubmit={handleSubmitfile}>
            <div className={styles.mainDiv}>
            <span >Profile Photo Upload</span>
            
            <Cropper
      image={previewSource}
      crop={crop}
     
      aspect={4 / 3}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
     
    />

           

                {/* <input className={styles.inptDiv} type="file" name="image" accept="image/*"  onChange={HandleFileInputChange} value={fileInputState}/>
                <button type="submit">Save</button> */}

                <input
                name="image" accept="image/*"  onChange={HandleFileInputChange} value={fileInputState}
       
                className={styles.input}
                id="contained-button-file"
        
                type="file"
              />
               {/* <img src={previewSource} alt="img" /> */}
      <label htmlFor="contained-button-file" className={styles.btnDiv}>
        <Button className={styles.btn} variant="contained" type="submit" color="primary" component="span">
          <b>Upload</b>
        </Button>
        
        <span>Supported file format png,jpg - upto 2mb</span>
      </label>
      <button type="submit">Save</button>

      
      
      </div>

    
         
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
// import React from "react";


// import Cropper from "react-easy-crop";
// import Slider from "@material-ui/core/Slider";
// import Button from "@material-ui/core/Button";



// export default function App() {
// 	const inputRef = React.useRef();

// 	const triggerFileSelectPopup = () => inputRef.current.click();

// 	const [image, setImage] = React.useState(null);
// 	const [croppedArea, setCroppedArea] = React.useState(null);
// 	const [crop, setCrop] = React.useState({ x: 0, y: 0 });
// 	const [zoom, setZoom] = React.useState(1);

// 	const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
// 		setCroppedArea(croppedAreaPixels);
// 	};

// 	const onSelectFile = (event) => {
// 		if (event.target.files && event.target.files.length > 0) {
// 			const reader = new FileReader();
// 			reader.readAsDataURL(event.target.files[0]);
// 			reader.addEventListener("load", () => {
// 				setImage(reader.result);
// 			});
// 		}
// 	};

	
// 	return (
// 		<div className='container'>
// 			<div className='container-cropper'>
// 				{image ? (
// 					<>
// 						<div className='cropper'>
// 							<Cropper
// 								image={image}
// 								crop={crop}
// 								zoom={zoom}
// 								aspect={1}
// 								onCropChange={setCrop}
// 								onZoomChange={setZoom}
// 								onCropComplete={onCropComplete}
// 							/>
// 						</div>

// 						<div className='slider'>
// 							<Slider
// 								min={1}
// 								max={3}
// 								step={0.1}
// 								value={zoom}
// 								onChange={(e, zoom) => setZoom(zoom)}
// 							/>
// 						</div>
// 					</>
// 				) : null}
// 			</div>

// 			<div className='container-buttons'>
// 				<input
// 					type='file'
// 					accept='image/*'
// 					ref={inputRef}
// 					onChange={onSelectFile}
// 					style={{ display: "none" }}
// 				/>
// 				<Button
// 					variant='contained'
// 					color='primary'
// 					onClick={triggerFileSelectPopup}
// 					style={{ marginRight: "10px" }}
// 				>
// 					Choose
// 				</Button>
// 				{/* <Button variant='contained' color='secondary' onClick={onDownload}>
// 					Download
// 				</Button> */}
// 			</div>
// 		</div>
// 	);
// }