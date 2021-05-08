import Head from "next/head";
import { React, useState, useEffect, useContext } from "react";
import {JobSearchContext} from '../context/JobSearchContext'
import styles from "../../styles/featuredJob.module.css";
import FeaturedJob from "../propComponents/FeaturedJob";
import FeaturdJobData from "../array/FeaturedJobData";
import axios from "axios";
import firebase from "firebase/app";
import initFirebase from "../config/firebaseConfig";
import Cookies from 'universal-cookie';
import "firebase/auth";
import {getCookies} from '../config/FirebaseToken'


export default function FeaturedJobParents() {

  const {location, jobType, catagories, searchLocation,searchJob} = useContext(JobSearchContext);
  // initFirebase();
  // const cookies = new Cookies();
  const [items, setItems] = useState([]);
  // if(jobType===""||location===""){
  //   getData();
  // }


  useEffect(() => {
    
    async function getData() {
      try {
        const coookieValue = getCookies();
        //  console.log(coookieValue)
        const url1 = `https://adminproductionproject.el.r.appspot.com/api/v1/business/project/public?sectors=${searchJob}&location=${searchLocation}&page=0&limit=50&sort=createdAt&sortOrder=asc`
        const url2 = `http://localhost:8080/api/v1/business/project/public?location=${location}&sectors=${jobType || catagories}&page=0&limit=50&sort=createdAt&sortOrder=asc`
        // const url3 = `http://localhost:8080/api/v1/business/project/public?sectors=agriculture&page=0&limit=50&sort=createdAt&sortOrder=asc`
         const url4 = `http://localhost:8080/api/v1/business/project/public?page=0&limit=50&sort=createdAt&sortOrder=asc`
        
        const res = await axios.get(
          url1,
          {
            headers: {
              // authorization:cookies.get('access_token') ,
              // authorization:getCookies() ,
            },
          }
        );
        console.log(res.data.projects);
        setItems(res.data.projects);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  },[searchLocation,searchJob]);
  return (
    <>
      {/* <div>
                {FeaturdJobData.slice(0, 4).map((val) => {
                    return (
                        
                        <FeaturedJob image={val.image} company={val.company}
                            skill={val.skill} location={val.location}
                            dutyTime={val.dutyTime} salary={val.salary} />
                            );
                         })}

            </div> */}
      <div>
        {items
        // .filter((item)=>{
        //   if (text == ""){
        //     return item
        //   }else if (item.location.toLowerCase().includes(text.toLowerCase())){}
        // })
        .slice(0, 10).map((item, id) => {
          return (
            <div key={id}>
              <FeaturedJob
                company={item.title}
                skill={item.description}
                location={item.location}
                salary={item.requirements.map((requ, id) => {
                  return (
                    <div key={id}>
                      <div>
                        {requ.details.map((sal, id) => {
                          return (
                            <div key={id}>
                              {sal.salaryPerMonth.minValue}-
                              {sal.salaryPerMonth.maxValue}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              />
            </div>
          );
        })}
      </div>

      {/* <div>{catagories}</div> */}
    </>
  );
}
