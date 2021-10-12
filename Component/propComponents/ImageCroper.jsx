import { ScaleLoader } from "react-spinners";
import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Button from "@material-ui/core/Button";
import styles from "../../styles/imageCroper.module.css";
import getCroppedImg, { generateDownload } from "../../utils/cropImage";
import { dataURLtoFile } from "../../utils/dataURLtoFile";
import { API_CONSTANTS } from "../../Component/config/apiConstant";
import { getCookies } from "../../Component/config/FirebaseToken";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import axios from "axios";
import Spinner from "./ReactSpinner";
import Slider from "@material-ui/core/Slider";
import Compress from "browser-image-compression";
import * as Yup from "yup";
toast.configure();

export default function ImageCroper(props) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [loader, setloader] = useState(false);
  const [croppedArea, setCroppedArea] = useState();
  const [origImage, setOrigImage] = useState(false);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onUpload = async () => {
    console.log("upload run");

    const canvas = await getCroppedImg(props.image, croppedArea);
    console.log("cropped image...................................................")
    console.log(canvas);
    const canvasDataUrl = canvas.toDataURL("image/jpeg");
    const convertedUrlToFile = dataURLtoFile(
      canvasDataUrl,
      "cropped-image.jpeg"
    );
    console.log(convertedUrlToFile);
    setOrigImage(convertedUrlToFile)
    const reader = new FileReader();
    // reader.readAsDataURL(convertedUrlToFile);
    // reader.onloadend = () => {
    //   uploadImage(reader.result);
    //   compressImage()
    // };
    compressImage()
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      const data = {
        photo: base64EncodedImage,
      };
      const reqUrl =
        API_CONSTANTS.baseUrl + API_CONSTANTS.enrollment.WORKER_PHOTO_UPLOAD;

      const res = await axios.put(reqUrl, data, {
        headers: {
          // authorization:cookies.get('access_token') ,
          authorization: getCookies(),
        },
      });

      console.log(res.data);
      if (res.data) {
        localStorage.setItem("user_info", JSON.stringify(res.data.data));
        toast.success("Photo Uploaded sucessfully", {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          position: "bottom-right",
          autoClose: 5000,
        });
      } else {
        setLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  const compressImage = async () => {
    const option = {
      maxSizeMB: 1,
      maxWidthOrHeight: 500,
      useWebWorker: true,
    };

//     if(option.maxSizeMB >= origImage/1024 ){
// alert("image is too low")
// return 0;
//     }
    let outPut;
    Compress(origImage, option).then((x)=>{
      outPut = x;
      console.log(outPut)
      const reader = new FileReader();
      reader.readAsDataURL(outPut);
    reader.onloadend = () => {
      uploadImage(reader.result);
     
    };
    }) 
  };

  return (
    <>
      <Cropper
        image={props.image}
        crop={crop}
        zoom={zoom}
        aspect={4 / 3}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
<div>
      <div className="slider">
        <Slider
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={(e, zoom) => setZoom(zoom)}
          color="secondary"
        />
      </div>
      <Button
        className={styles.btn}
        variant="contained"
        type="submit"
        onClick={onUpload}
        color="primary"
        component="span"
      >
        {loader ? <Spinner /> : <b>Upload</b>}
      </Button>

      {loader ? <Spinner /> : null}
      </div>
    </>
  );
}
