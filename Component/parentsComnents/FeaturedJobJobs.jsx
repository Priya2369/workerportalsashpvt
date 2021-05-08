import Head from "next/head";
import { React, useState, useEffect, useContext } from "react";
import { JobSearchContext } from "../context/JobSearchContext";
import styles from "../../styles/featuredJob.module.css";
import FeaturedJob from "../propComponents/FeaturedJob";
import FeaturdJobData from "../array/FeaturedJobData";
import axios from "axios";

export default function FeaturedJobJobs() {
  const [items, setItems] = useState([]);
  const { jobCatagories, jobLocation } = useContext(JobSearchContext);
  useEffect(() => {
    async function getData() {
      try {
        //  console.log(coookieValue)
        const url1 = `https://adminproductionproject.el.r.appspot.com/api/v1/business/project/public?sectors=${jobCatagories}&location=${jobLocation}&page=0&limit=50&sort=createdAt&sortOrder=asc`;
        // const url2 = `http://localhost:8080/api/v1/business/project/public?location=${location}&sectors=${jobType || catagories}&page=0&limit=50&sort=createdAt&sortOrder=asc`
        // const url3 = `http://localhost:8080/api/v1/business/project/public?sectors=agriculture&page=0&limit=50&sort=createdAt&sortOrder=asc`
        const url4 = `http://localhost:8080/api/v1/business/project/public?page=0&limit=50&sort=createdAt&sortOrder=asc`;

        const res = await axios.get(url1, {
          headers: {
            // authorization:cookies.get('access_token') ,
            // authorization:getCookies() ,
          },
        });
        console.log(res.data.projects);
        setItems(res.data.projects);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [jobCatagories, jobLocation]);
  return (
    <>
      <div>
        {/* {FeaturdJobData.map((val) => {
                    return (
                        <FeaturedJob image={val.image} company={val.company}
                            skill={val.skill} location={val.location}
                            dutyTime={val.dutyTime} salary={val.salary} />);
                         })} */}
        {items
          // .filter((item)=>{
          //   if (text == ""){
          //     return item
          //   }else if (item.location.toLowerCase().includes(text.toLowerCase())){}
          // })
          .slice(0, 10)
          .map((item, id) => {
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
      <div>{jobCatagories}</div>
    </>
  );
}
