import Head from "next/head";
import { React, useState, useEffect, useContext } from "react";
// import { JobSearchContext } from "../context/JobSearchContext";
import { userContext } from "../context/UserContext";
import styles from "../../styles/featuredJob.module.css";
import FeaturedJob from "../propComponents/FeaturedJob";
import axios from "axios";
import { getCookies } from "../config/FirebaseToken";
import { API_CONSTANTS } from "../config/apiConstant";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import LoadingSpinner from "../propComponents/ReactSpinner";
export default function FeaturedJobJobs() {
  const [items, setItems] = useState(false);
  const [clean, setClean] = useState(false);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState("");
  const {
    searchLocation,
    searchJob,
    jobType,
    setLocation,
    setJobType,
    searchSkill,
    searchJobRole,
  } = useContext(userContext);

  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    async function getData() {
      // if(searchLocation || searchJob|| jobType || shortJob){
      setLocation("");
      setJobType("");
      try {
        const params = {
          page: page,
          limit: 10,
          sort: "createdAt",
          sortOrder: "desc",
          ...(searchJob && { sectors: searchJob }),
          ...(searchLocation && { location: searchLocation }),
          ...(jobType && { employmentType: jobType }),
          ...(searchJobRole && { title: searchJobRole }),
          ...(searchSkill && { skill: searchSkill }),
        };

        const reqUrl =
          API_CONSTANTS.baseUrl +
          API_CONSTANTS.project.SEARCH_ALL_PROJECTS_PUBLIC;
        const res = await axios.get(reqUrl, {
          headers: {
            authorization: getCookies(),
          },
          params,
        });
        // console.log(res.data.projects);
        setItems(res.data.projects);
        setCount(res.data.count);
      } catch (error) {
        // console.log(error);
      }
    }

    getData();
  }, [
    searchLocation,
    searchJob,
    jobType,
    searchJobRole,
    searchSkill,
    page,
    clean,
  ]);
  return (
    <>
      {!items ? (
        <div className={styles.dataErrorCard}>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {items.length === 0 ? (
            <>
              {" "}
              <img className={styles.serachImg} src="./data not found.png" />
              <p>No data found with current search</p>{" "}
            </>
          ) : (
            <div className={styles.gridview}>
              {items.map((item, id) => {
                return (
                  <div key={id}>
                    <FeaturedJob
                      postedOn={item.createdAt.split("T")[0]}
                      id={item._id}
                      company={
                        item.companyId ? item.companyId.CompanyName : item.title
                      }
                      skill={item.sectors}
                      location={
                        typeof item.location === "object"
                          ? item.location.map((loc, id) => {
                            return <span key={id}>{loc},</span>;
                          })
                          : item.location
                      }
                      jobRole={
                        item.title

                      }

                      education={
                        item.requirements[0].minimumEducation
                      }

                      vacancy={
                        item.requirements[0].details[0].noOfPeople + " " + "openings"
                      }

                      experience={
                        item.requirements[0].minExperienceInYear &&
                          item.requirements[0].maxExperienceInYear
                          ? item.requirements[0].minExperienceInYear +
                          "-" +
                          item.requirements[0].maxExperienceInYear +
                          " years"
                          : "Fresher"
                      }
                      // skills={
                      //   typeof item.requirements[0].skill === "object"
                      //     ? item.requirements[0].skill.map((skil, id) => {
                      //         return <span key={id}>{skil} ,</span>;
                      //       })
                      //     : item.requirements[0].skill
                      // }
                      salary={item.requirements.map((requ, id) => {
                        return (
                          <div key={id}>
                            <div>
                              {requ.details.map((sal, id) => {
                                return (
                                  <div key={id}>

                                    ₹{sal.salaryPerMonth.minValue.toLocaleString()}{" "}
                                    -{" "}

                                    ₹{sal.salaryPerMonth.maxValue.toLocaleString()}
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
          )}
        </>
      )}
      {count > 0 ? (
        <div className={styles.pagination}>
          {page > 0 ? (
            <div className={styles.prev}>
              <SkipPreviousIcon
                className={styles.butt}
                fontSize="large"
                onClick={() => setPage(page - 1)}
              />
            </div>
          ) : (
            <SkipPreviousIcon fontSize="large" disabled={true} />
          )}
          <div>
            <p className={styles.p}>
              Showing
              <span>{page * 10} </span>
              to
              <span> {count > page * 10 + 10 ? page * 10 + 10 : count} </span>
              of
              <span> {count} </span>
              results
            </p>
          </div>
          <div>
            {count > page * 10 + 10 && count > 10 ? (
              <SkipNextIcon
                className={styles.butt}
                fontSize="large"
                onClick={() => setPage(page + 1)}
              />
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
