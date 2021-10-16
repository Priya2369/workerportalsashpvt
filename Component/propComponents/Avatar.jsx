import { useState, useRef, useEffect } from "react";
// import "./avatar.css";
import styles from "../../styles/avatar.module.css";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import Badge from '@material-ui/core/Badge';
import ImageCroper from "./ImageCroper";
import * as Yup from "yup";

export default function RenderAvatar() {
  // const classes = useStyles();

  // Menu
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState();
  const [avatar, setAvatar] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [avtarTrue, setAvtarTrue] = useState(false);

  const inputRef = useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("user_info"));

      if (data) {
        if (data.photo) {
          setAvatar(data.photo);
        } else {
          setAvatar("./4.png");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [avtarTrue]);

  //close

  // const anchorRef = React.useRef(null);

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
      setOpen(true);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const removeUploadimage = () => {
    setAnchorEl(null);
    // triggerFileSelectPopup
  };
  const openUploadFile = () => {
    setAnchorEl(null);
    triggerFileSelectPopup();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const props = { image,setAvtarTrue,setOpen };

  return (
    <>
      <div className={styles.imgs}>
        <img src={avatar} alt="avatar" />
        <Badge badgeContent={
      <div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onSelectFile}
        style={{ display: "none" }}
      />
      <CameraAltOutlinedIcon fontSize="small" className={styles.cam} onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={openUploadFile}>Upload</MenuItem>

        <MenuItem onClick={removeUploadimage}>Remove</MenuItem>
      </Menu>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent className={styles.fulDiv}>
          
            <ImageCroper {...props} />
          
        </DialogContent>
      </Dialog>
      </div>
        }/>
      </div>
    </>
  );
}
