import React from 'react'
import styles from '../../styles/profileImage.module.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ProfileCrop(){
    return(
        <>
            <div >
            <form onSubmit={handleSubmitfile}>
            <div className={styles.mainDiv}>
            <span >Profile Photo Upload</span>
            
            {/* <Cropper
      image={previewSource}
      crop={crop}
      zoom={zoom}
      aspect={4 / 3}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
    /> */}

           

                {/* <input className={styles.inptDiv} type="file" name="image" accept="image/*"  onChange={HandleFileInputChange} value={fileInputState}/>
                <button type="submit">Save</button> */}

                <input
                name="image" accept="image/*"  onChange={HandleFileInputChange} value={fileInputState}
       
                className={styles.input}
                id="contained-button-file"
        
                type="file"
              />
      <label htmlFor="contained-button-file" className={styles.btnDiv}>
        <Button className={styles.btn} variant="contained" type="submit" color="primary" component="span">
          <b>Upload</b>
        </Button>
        <span>Supported file format png,jpg - upto 2mb</span>
      </label>
      

      
      
      </div>

    
         
            </form> 
          
            
            </div>
        </>
    )
}