import Link from "next/link";
import {
  useState,
  useEffect,
  createContext,
  useReducer,
  useContext,
} from "react";
import style from "./Header_Bottom.module.css";
import Header_SideBar from "./Header_SideBar";
import navigation from "./Header_Navigation.module.css";
import { logout } from "../config/FirebaseToken";
import Cookies from "universal-cookie";
import { userContext } from "../context/UserContext";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import initFirebase from "../config/firebaseConfig";
import firebase from "firebase/app";
import { useRouter } from "next/router";
import { API_CONSTANTS } from "../config/apiConstant";
import { getCookies } from "../config/FirebaseToken";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from "axios";

// import StateManager from 'react-select';

// import {logout} from '../config/FirebaseToken'

const Header_Bottom = () => {
  initFirebase();
  const router = useRouter();
  const cookies = new Cookies();

  useEffect(() => {
    const data = localStorage.getItem("user_info");

    if (data) {
      setShowHeader(true);
    }
  }, []);

  const {
    state,
    dispatch,
    showHeader,
    setShowHeader,
    setSingleUser,
    singleUser,
  } = useContext(userContext);
  // function for user logOut.....................
  function logout(e) {
    e.preventDefault();

    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Signed Out");
        cookies.remove("access_token");

        localStorage.removeItem("user_info");
        setShowHeader(false);
        router.push("/");
      })
      .catch((e) => {
        console.error("Sign Out Error", e);
      });
  }

  
  // // SetItem in localStorage for single user

  // useEffect(()=>{
  // console.log(singleUser)
  //   localStorage.setItem('data',JSON.stringify(singleUser))

  // },[])

  return (
    <>
      {showHeader ? (
        <div className={style.headerBottom}>
          <span>
          
            <a href="/" >
            <img src="/logo.png" alt="Logo" />
            </a>
          
          </span>

          <nav className={navigation.navigation}>
            <Link href="/">
              <a className={router.pathname == "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/jobs">
              <a className={router.pathname == "/jobs" ? "active" : ""}>Jobs</a>
            </Link>

            <Link href="/about">
              <a className={router.pathname == "/about" ? "active" : ""}>About</a>
            </Link>
            <Link href="/contact">
              <a className={router.pathname == "/contact" ? "active" : ""}>Contact</a>
            </Link>
            <Link href="/profile">
            <a className={router.pathname == "/profile" ? "active" : ""}>Profile</a>
            </Link>
          </nav>

          <div className={style.notification}>
            <NotificationsActiveOutlinedIcon fontSize="small" />
          </div>
          <button onClick={(e) => logout(e)} className={navigation.logout}>Logout</button>
          <div className={style.sideBar}>
            <Header_SideBar />
          </div>
        </div>
      ) : (
        <div className={style.headerBottom}>
          <span>
          <Link href="/"><a>
            <img src="/logo.png" alt="Logo" />
            </a>
            </Link>

          </span>

          <nav className={navigation.navigation}>
            <Link href="/">
              <a className={router.pathname == "/" ? "active" : ""}>Home</a>
            </Link>

            <Link href="/about">
              <a className={router.pathname == "/about" ? "active" : ""}>About</a>
            </Link>
            <Link href="/contact">
              <a className={router.pathname == "/contact" ? "active" : ""}>Contact</a>
            </Link>
          </nav>
          <Link href="/signup">
            <a className={router.pathname == "/signup" ? "active" : ""}>
              <div className={style.loginButton}>Login / Signup </div>
            </a>
          </Link>

          <div className={style.sideBar}>
            <Header_SideBar />
          </div>
        </div>
      )}
    </>
  );
};

export default Header_Bottom;
