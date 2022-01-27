import Head from "next/head";
import { useState, useEffect, createContext, useReducer } from "react";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Flex from "./Flex";
import { userContext } from "../Component/context/UserContext";
import { initialState, reducer } from "../Component/reducer/UseReducer";
import socketio from "socket.io-client";

// const socket = socketio.connect("http://localhost:8080");


const Layout = ({ children }) => {
  const [socket, setSocket] = useState(null);
  // useEffect(() => {
  //   setSocket(socketio.connect("http://localhost:8080"));
  // }, []);
  
  
  const [showHeader, setShowHeader] = useState(false);

  // state for single job id
  const [id, setId] = useState();

  // state for store single job details
  const [singleJob, setSingleJob] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchJob, setSearchJob] = useState("");

  //   signup state...................
  const [detail, setDetail] = useState({
    phoneNo: "",
  });

  // state for serach component   Search.jsx
  const [catagories, setCatagories] = useState();
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [sortJob, setSortJob] = useState("desc");

  //   state for filter job search

  const [getfilterValue, setFilterValue] = useState({
    jobCatagories: "",
    jobTypes: "",
    jobLocation: "",
    experience: "",
    postedWithin: "",
    salary: "",
    sorting: "",
  });
  let {
    jobCatagories,
    jobTypes,
    jobLocation,
    experience,
    postedWithin,
    salary,
    sorting,
  } = getfilterValue;

  //   get single user value for profile update
  const [singleUser, setSingleUser] = useState();

  const [applied, setApplied] = useState([]);
  // console.log(singleUser)

  return (
    <>
    <Head>
      <title>Mosahay: Putting people back to Productive work</title>
    </Head>
      <userContext.Provider
        value={{
          state,
          dispatch,
          singleJob,
          setSingleJob,
          setLocation,
          setJobType,
          location,
          jobType,
          catagories,
          setCatagories,
          sortJob,
          setSortJob,
          searchLocation,
          setSearchLocation,
          searchJob,
          setSearchJob,
          jobCatagories,
          jobTypes,
          jobLocation,
          experience,
          postedWithin,
          salary,
          sorting,
          setFilterValue,
          getfilterValue,
          detail,
          setDetail,
          singleUser,
          setSingleUser,
          id,
          setId,
          applied,
          setApplied,
          showHeader,
          setShowHeader,
          socket
        }}
      >
        <Header />

        {/* <Flex/> */}
        {children}
        {/* <Footer/> */}
      </userContext.Provider>
    </>
  );
};
export default Layout;
