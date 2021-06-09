import { React, useState, useEffect, useContext } from "react";
import {JobSearchContext} from '../context/JobSearchContext'
import {userContext} from '../context/UserContext'
import FeaturedJob from "../propComponents/FeaturedJob";
import axios from "axios";
import "firebase/auth";
import {getCookies} from '../config/FirebaseToken'
import {API_CONSTANTS} from '../config/apiConstant'


export default function FeaturedJobParents() {

  const { searchLocation,searchJob} = useContext(userContext);
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
        const reqUrl = API_CONSTANTS.baseUrl+ API_CONSTANTS.project.SEARCH_ALL_PROJECTS_PUBLIC+"?sectors="+searchJob+"&location="+searchLocation+"&page=0&limit=50&sort=createdAt&sortOrder=asc"
        
        const res = await axios.get(
          reqUrl,
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
        console.log(error.message);
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
        
        .slice(0, 10).map((item, id) => {
          return (
            <div key={item._id}  >
              <FeaturedJob
                id={item._id}
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
