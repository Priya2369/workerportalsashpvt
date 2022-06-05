import { useState, useContext } from "react";
import React, { Component } from "react";
import styles from "../../styles/opening.module.css";
import Process from "./Process";
import Link from "next/link";
import { useRouter } from "next/router";
import { userContext } from "../context/UserContext";
import { FaWalking } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Open() {

  const {
    getfilterValue,
    setFilterValue,
    jobCatagories,
    jobLocation,
    setSearchLocation,
    setSearchJob,
    jobTypes,
    sorting,
    setJobType,
    setSortJob,
    setLocation,
  } = useContext(userContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  const imgg = [{ url: "flipkart.png" },
  { url: "swiggy.png" },
  { url: "ola.png" },
  { url: "jioMart.png" },
  { url: "reliance.png" },
  ]

  const imggg = [{ url: "monster.png" },
  { url: "justdial.png" },
  { url: "zomato.png" },
  { url: "urban.png" },
  { url: "grab.png" },
  ]

  const getJob = [{ text: "Register at Mosahay", color: "#36404c", url: "register.png" },
  { text: "Search and apply for jobs", color: "#00bea3", url: "search.png" },
  { text: "Directly call or whatsapp employers", color: "#79a377", url: "call.png" },
  { text: "Give interview and get hired", color: "#f1894c", url: "interview.png" }]

  const slidecard = [
    { text: "I found this organization and joined it with the help of one of my closest friends. After joining MoSahay we joined a team with a mentor in it. I was working in MoSahay on the Designing team. The good thing there was we were free to pick any of the technology to work. I contributed there in Frontend; and apart from that, we did various things like RPA, WIX, WordPress, etc.", name: "Ms. Surbhi Sinha", work: "Angular Developer", urll: "surbhi.png" },
    { text: "I have learned many things and have gained much knowledge while working with MoSahay. I enjoyed working here. I want to thank MoSahay for giving me the opportunities in professional and personal development during my tenure with the company. I will always appreciate your mentorship as I have started my job, my career from here.", name: "Ms. Sweedesna Panda", work: "Angular Developer", urll: "sweedeshna.png" },
    { text: "I found this organization and joined it with the help of one of my closest friends. After joining MoSahay we joined a team with a mentor in it. I was working in MoSahay on the Designing team. The good thing there was we were free to pick any of the technology to work. I contributed there in Frontend; and apart from that, we did various things like RPA, WIX, WordPress, etc.", name: "Ms. Surbhi Sinha", work: "Angular Developer", urll: "surbhi.png" },
  ]


  const router = useRouter();
  function searchJob(e) {
    e.preventDefault();
    setFilterValue({
      jobCatagories: "",
      jobTypes: "",
      jobLocation: "",
      experience: "",
      postedWithin: "",
      salary: "",
      sorting: ""
    })
    router.push('/jobs')
    setSearchJob();
    setSearchLocation();
    setJobType();
    setSortJob()
    setLocation()
  }

  return (
    <>
      <div className={styles.hedar}>
        {/* putting people back to productive work section */}
        <div className={styles.slogan}>
          <h2>Putting People Back To Productive Work</h2>
          <p>60+ Clients | 5000+ People in productive work</p>
        </div>

        <div className={styles.cardDiv}>
          <div className={styles.card}>
            <img src="job.png" alt="job" />
            <div className={styles.cardInfo}>
              <h1>Need a Job ?</h1>
              <Link href="/jobs"><button className={styles.cardButton}>Search Jobs</button></Link>
            </div>
          </div>

          <div className={styles.card}>
            <img src="hire.png" alt="job" />
            <div className={styles.cardInfo}>
              <h1>Want to hire ?</h1>
              <a href="https://corporate.mosahay.org/sign-in" rel="noopener noreferrer" target="_blank" >
                <button className={styles.cardButton}>Post Jobs</button>
              </a>
            </div>
          </div>
        </div>

        {/* partner MNCs and SMEs */}
        <div className={styles.divArea}>
          <h2>Trusted By 60+ Companies</h2>
          <div className={styles.flexdiv}>
            <div className={styles.firstdiv}>
              <h1>Our partner MNCs</h1>
              <div className={styles.imgdiv}>
                {
                  imgg.map((img, i) =>
                    <div key={i} className={styles.imgcard}>
                      <img src={img.url} className={styles.mapimg} />
                    </div>)
                }
              </div>
            </div>

            <div className={styles.firstdiv}>
              <h1>Our partner SMEs</h1>
              <div className={styles.imgdiv}>
                {
                  imggg.map((img, j) =>
                    <div key={j} className={styles.imgcard}>
                      <img src={img.url} className={styles.mapimg} />
                    </div>)
                }
              </div>
            </div>
          </div>
        </div>

        {/* how to get job section */}
        <div className={styles.getjobdiv}>
          <h1>How To Get A Job On Mosahay</h1>
          <div className={styles.jobdiv}>
            {
              getJob.map((getJobs, indexx) =>
                <>
                  <div key={indexx} className={styles.jobcard} style={{ backgroundColor: (getJobs.color) }}>
                    <div className={styles.imgspan}>
                      <div className={styles.icondiv}>
                        <img src={getJobs.url} alt="job" className={styles.jobimg} />
                      </div>
                      <span>{getJobs.text}</span>
                    </div>
                  </div>
                  {indexx== 3 ? null : <div className={styles.arrow}><FaArrowRight /> </div>}
                </>
              )
            }
          </div>
        </div>

        {/* Mosahay For Employer section */}
        <div className={styles.employer}>
          <div className={styles.employerimgdiv}>
            <img src="employer.png" alt="employer" className={styles.employerimg} />
          </div>
          <div className={styles.employerdesc}>
            <h1>Mosahay For Employers</h1>
            <div className={styles.para}>
              <FaHandsHelping className={styles.icon} />
              <p>Hire Staff in 48 hours for free</p>
            </div>

            <div className={styles.para}>
              <FaWalking className={styles.icon} />
              <p>Best candidates reach out to you directly</p>
            </div>

            <div className={styles.employerbtndiv}>
              <a href="https://corporate.mosahay.org/sign-in" rel="noopener noreferrer" target="_blank" >
                <button className={styles.employerbtn}>Post Jobs Now</button>
              </a>
            </div>

          </div>
        </div>

        {/* Mosahay App download section */}
        <div className={styles.download}>
          <div className={styles.downloadimgdiv}>
            <img src="mobile.png" alt="mobile" className={styles.downloadimg} />
          </div>

          <div className={styles.appdiv}>
            <div className={styles.hdivs}>
              <h1>Download The Mosahay App</h1>
              <h2>And Find Jobs Easily</h2>
            </div>
            <div className={styles.downloadway}>
              <div className={styles.link}>
                <div className={styles.inputpart}>
                  <input type="text" placeholder="Enter Mobile Number" />
                  <button>Get Link</button>
                </div>

                <div className={styles.googleplaydiv}>
                  <a href="https://play.google.com/store/apps/details?id=com.mosahay.android.app" rel="noopener noreferrer" target="_blank" >
                    <img src="googleplay.png" alt="googleplay" className={styles.googleplay} />
                  </a>
                  <span>Available On Google Play Store</span>
                </div>

              </div>

              <div className={styles.qrdiv}>
                <img src="qr.png" alt="qr" className={styles.qr} />
                <span>Scan The QR Code</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.slideimg}>
          <h1>What They Say !</h1>
          <Carousel swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            className={styles.slidemain}>
            {
              slidecard.map((slidercard, ind) =>
                <div key={ind} className={styles.slides} >
                  <p>{slidercard.text}</p>
                  <div className={styles.slidediv}>
                    <div>
                      <h3>{slidercard.name}</h3>
                      <p>{slidercard.work}</p>
                    </div>
                    <img src={slidercard.urll} alt="testimonialimg" />
                  </div>
                </div>)
            }
          </Carousel>
        </div>



        {/* <h1>Hire staff or search jobs in All Cities</h1>
        <div className={styles.btngrp}>
          <a
            href="https://corporate.mosahay.org/sign-in"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className={styles.post}>Post New Job</button>
          </a> */}

        {/* <Link href="/jobs"> */}
        {/* <button className={styles.srch} onClick={searchJob}>
            <a>Search Job</a>
          </button> */}
        {/* </Link> */}
        {/* </div>
        <Process /> */}

      </div>
    </>
  );
}
