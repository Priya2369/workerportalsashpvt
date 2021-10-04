import Head from 'next/head'

import FavoriteIcon from "@material-ui/icons/Favorite";
import { useState, useContext, useEffect } from "react";

import { userContext } from "../../Component/context/UserContext";
import { API_CONSTANTS } from "../../Component/config/apiConstant";
import { getCookies } from "../../Component/config/FirebaseToken";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import axios from "axios";



export default function saveJob(props) {
    const { singleJob} = useContext(userContext);
    const cookies = new Cookies();
    async function savejob(e) {
        e.preventDefault();
        // console.log(projectId)
        try {
          //  console.log(coookieValue)
          const reqUrl =
            API_CONSTANTS.baseUrl +
            API_CONSTANTS.project.APPLY_PROJECT +
            singleJob._id;
    
          const res = await axios.put(
            reqUrl,
            {status:"wishlisted"},
            {
              headers: {
                authorization: getCookies(),
              },
            }
          );
          // console.log(res.data.projectData.value);
          // localStorage.setItem("user_info",JSON.stringify(res.data.projectData.value))
          console.log(res);
          if (res.data.message === "Project apply successful") {
            toast.success("Project apply successful", {
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              position: "bottom-right",
              autoClose: 5000,
            });
          }
        } catch (error) {
          // console.log(error.response.data.statusCode);
          console.log(error);
          if (error.response) {
            toast.error(error.response.data.message, {
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
      }


  return (
    <>
   
<FavoriteIcon
onClick={savejob}/>
   
    </>
  )
}