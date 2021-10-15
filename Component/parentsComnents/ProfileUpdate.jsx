import { React, useState, useEffect, useContext, useRef} from "react";
import { userContext } from "../context/UserContext";
import { useFormik, FieldArray } from "formik";
import validation from "../validation/validate";
import pincodeList from "../array/pincodeCityDistrictState";
import educations from "../array/education";
import educationForm from '../array/educationForm'
import state from "../array/state"
import univercity from "../array/university";
import { API_CONSTANTS } from "../config/apiConstant";
import { getCookies } from "../config/FirebaseToken";
import axios from "axios";
import styles from "../../styles/profileForm.module.css";
import { toast } from "react-toastify";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import PhoneEnabledOutlinedIcon from "@material-ui/icons/PhoneEnabledOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import LaptopIcon from "@material-ui/icons/Laptop";
import { useRouter } from "next/router";
import SkillSector from "../array/skillSector";
import skills from "../array/skill";
import { calculateAge } from "../config/calculateAge";
import Avatar from '../propComponents/Avatar'
import CvUpload from '../propComponents/CvUpload'

import { Link } from "react-scroll";
// import {StickyContainer, Sticky} from 'react-sticky'

toast.configure();

const ProfileUpdate = () => {
  const router = useRouter();

  const { detail, singleUser } = useContext(userContext);
  const [showProfile, setShowprofile] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showJobDescription, setShowJobDescription] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showCondition, setShowCondition] = useState(false);
  const [profileName, setProfileName] = useState({});
  const [applied, setApplied] = useState([]);
  const [skill, setSkill] = useState([]);

  // console.log("profile............................");

  // console.log(singleUser);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("user_info"));

      if (data) {
        setProfileName(data.generalData);
        setApplied(data.appliedProject);
        setSkill(data.skillData);
        //  general data custom input
        formik.setFieldValue(
          "firstName",
          data.generalData.name.split(" ")[0].trim()
        );
        formik.setFieldValue(
          "lastName",
          data.generalData.name.split(/(?<=^\S+)\s/)[1]
        );
        formik.setFieldValue("address", data.generalData.address);
        if (data.generalData.dateOfBirth) {
          formik.setFieldValue(
            "date",
            data.generalData.dateOfBirth.split("T")[0]
          );
        }
        formik.setFieldValue("gender", data.generalData.gender);

        if (data.generalData.dateOfBirth) {
          formik.setFieldValue(
            "age",
            calculateAge(data.generalData.dateOfBirth)
          );
        }
        formik.setFieldValue("email", data.generalData.email);
        // skill data
        formik.setFieldValue("passingYear", data.generalData.email);
        formik.setFieldValue("education", data.skillData.education);
        if (data.skillData.specialization){
          formik.setFieldValue("specialization" , data.skillData.specialization);
        }
        if (data.skillData.college) {
          formik.setFieldValue("collegeUniversity", data.skillData.college);
        }
        if (data.skillData.experiences) {
          formik.setFieldValue("experience", data.skillData.experiences);
        }

        if (data.skillData.mark) {
          formik.setFieldValue("CGPAPercentage", data.skillData.mark);
        }

        if (data.skillData.passingYear) {
          formik.setFieldValue("PassingYear", data.skillData.passingYear);
        }
        if (data.skillData.yearGap) {
          formik.setFieldValue("yearGap", data.skillData.yearGap);
        }
        // console.log(data.skillData.sectors);
        if (data.skillData.sectors) {
          formik.setFieldValue("sector", data.skillData.sectors);
        }
        if (data.skillData.skills) {
          formik.setFieldValue("skill", data.skillData.skills);
        }
        if (data.skillData.preferredLocations) {
          formik.setFieldValue("prflocation",data.skillData.preferredLocations);
        }
      }
    } catch (error) {
      // console.log(error);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: " ",
      lastName: " ",
      date: "",
      gender: "",
      age: "",
      email: "",
      address: "",
      pincode: "",

      education: "",
      specialization:"",
      PassingYear: "",
      yearGap: "",
      collegeUniversity: "",
      CGPAPercentage: "",
      // interestArea: "",
      // prefferedLocation: "",
      sector: "",
      skill: "",
      prflocation:"",
      experience: "",
      termCondition: false,
    },
    validate: validation,

    onSubmit: async (values, { resetForm }, errors) => {
      if (errors) {
        // console.log("feild errro...");
      }
      // console.log(values.PassingYear)
      const testDefault = {
        generalData: {
          registerBy: "self",
          name: values.firstName + " " + values.lastName,
          dateOfBirth: values.date,

          gender: values.gender,
          // mobileNumber: phoneNo,
          email: values.email,
          pinCode: values.address.split(",")[0].trim(),
          address: values.address,
        },
        skillData: {
          ...(values.sector && { sectors: [values.sector.toString()] }),
          // "agriculture"

          sectorsOther: ["string"],
          skills: [values.skill.toString()],
          // "poultry farmer"

          skillsOther: ["string"],
          ...(values.experience && { experiences: values.experience }),

          education: values.education,
          ...(values.specialization&&{specialization: values.specialization}),
          college: values.collegeUniversity,
          mark: values.CGPAPercentage,
          passingYear: values.PassingYear,
          yearGap: Number(values.yearGap),

          // preferredLocations: prefferedLocation,
          preferredLocations:[values.prflocation.toString()],
          preferredLocationsOther: ["string"],
          otherInfo: "string",
        },
        healthData: {
          currentCondition: ["asthma"],
          currentConditionOther: ["string"],
          symptoms: ["fever"],
          symptomsOther: ["string"],
        },
      };
      // console.log(values);

      try {
        // console.log("post data started");
        // console.log(getCookies());
        const reqUrl =
          API_CONSTANTS.baseUrl + API_CONSTANTS.enrollment.UPDATE_MANPOWER;
        const res = await axios.post(reqUrl, testDefault, {
          headers: {
            // authorization:cookies.get('access_token') ,
            authorization: getCookies(),
          },
        });
        //   formik = useFormik('')
        toast.success("Data submitted sucessfully", {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          position: "bottom-right",
          autoClose: 5000,
        });

        localStorage.setItem("user_info", JSON.stringify(res.data.profile));

        // console.log(res.data.profile);
        // console.log("name" + formik.values.passingYear);
      } catch (error) {
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
      // resetForm({values:''})
    },

    // submitt end......
  });
  // map for applied project
  let apply;
  // if(applied){
  //   apply= applied.map((appl, id)=>{
  //     return <p key={id}>{appl.project.title}</p>
  //   })
  // }

  // if(formik.errors){
  //   console.log("error error .......")
  // }
  function onApplied(e) {
    e.preventDefault();
    router.push("/appliedjob");
  }
  return (
    <>
      <div className={styles.body}>
        {/* profile Header */}
        <div className={styles.Header}>
          <div className={styles.left}>
            {/* <div className={styles.imgs}> */}
              {/* <img src="./4.png" /> */}
              <Avatar/>
            {/* </div> */}
            <div className={styles.dats}>
              {profileName.name ? (
                <div className={styles.name}>
                  <span>
                    <b>{profileName.name}</b>
                  </span>
                </div>
              ) : null}
              {profileName.mobileNumber ? (
                <div className={styles.phone}>
                  <PhoneEnabledOutlinedIcon fontSize="small" />{" "}
                  {profileName.mobileNumber}
                </div>
              ) : null}
              {profileName.email ? (
                <div className={styles.email}>
                  <EmailOutlinedIcon fontSize="small" />
                  {profileName.email}
                </div>
              ) : null}
              {skill.experiences ? (
                <div className={styles.exp}>
                  <BusinessCenterOutlinedIcon fontSize="small" />
                  {skill.experiences} year{" "}
                </div>
              ) : null}
            </div>
          </div>
          <div><CvUpload/></div> 
          {applied ? (
            <div className={styles.right} onClick={(e) => onApplied(e)}>
              
              <LaptopIcon />
              {/* <div className={styles.marg}>
                <span className={styles.applied}> {applied.length}</span>
              </div> */}
              &nbsp;&nbsp;&nbsp;Applied Job &nbsp;&nbsp;
            </div>
          ) : (
            <div className={styles.right} onClick={(e) => onApplied(e)}>
              <LaptopIcon />
              {/* <div className={styles.marg}>
                <span className={styles.applied}> 0</span>
              </div> */}
              &nbsp;&nbsp;&nbsp;Applied Job &nbsp;&nbsp;
            </div>
          )}
        </div>

        <div className={styles.dataDiv}>
          <div className={styles.tab}>
            <div className={styles.tabDiv}>
              {/*<h2>Quick Link</h2>*/}
              <button className={styles.p}>
                <Link
                  to="profile"
                  smooth={true}
                  duration={1000}
                  className={styles.tablinksp}
                >
                  <h1>Profile</h1>
                </Link>
              </button>
              <button className={styles.p}>
                <Link
                  to="educations"
                  smooth={true}
                  duration={1000}
                  className={styles.tablinkse}
                >
                  <h1>Education</h1>
                </Link>
              </button>
              <button className={styles.p}>
                <Link
                  className={styles.tablinksj}
                  to="jobDescription"
                  smooth={true}
                  duration={1000}
                >
                  <h1>Description</h1>
                </Link>
              </button>
            </div>
          </div>

          {/* PROFILE FORM START ............................................ */}

          <div className={styles.tab2}>
            <form onSubmit={
              formik.handleSubmit}>
              {/* profile information form componets */}
              <div className={styles.formOne} id="profile">
                <h2
                  className={styles.hover}
                  onClick={() => setShowprofile(!showProfile)}
                >
                  Add Profile
                </h2>
                {showProfile ? (
                  <div className={styles.size}>
                    <div className={styles.firstLastName}>
                      <div className={styles.fname}>
                        <div className={styles.inputDivname}>
                          <span className={styles.icon}>
                            <b>
                              First Name<span className={styles.star}>*</span>
                            </b>
                          </span>
                          <input
                            className={styles.input}
                            type="text"
                            placeholder={"First Name"}
                            onBlur={formik.handleBlur}
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div>
                          {formik.touched.firstName &&
                          formik.errors.firstName ? (
                            <p className={styles.error}>
                              {formik.errors.firstName}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className={styles.lname}>
                        <div className={styles.inputDivlast}>
                          <span className={styles.icon}>
                            <b>
                              Last Name<span className={styles.star}>*</span>
                            </b>
                          </span>
                          <input
                            className={styles.input}
                            type="text"
                            placeholder={"Last Name"}
                            onBlur={formik.handleBlur}
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div>
                          {formik.touched.lastName && formik.errors.lastName ? (
                            <p className={styles.error}>
                              {formik.errors.lastName}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className={styles.firstLastName2}>
                      <div className={styles.inputDivdate}>
                        <span className={styles.icon}>
                          <b>
                            D.O.B<span className={styles.star}>*</span>
                          </b>
                        </span>
                        <input
                          className={styles.inputd}
                          type="date"
                          name="date"
                          value={formik.values.date}
                          onChange={formik.handleChange}
                          placeholder={"Date Of Birth"}
                        />
                        <div>
                          {formik.touched.date && formik.errors.date ? (
                            <p className={styles.error}>{formik.errors.date}</p>
                          ) : null}
                        </div>
                      </div>

                      <div className={styles.inputDivgen}>
                        <span className={styles.icon}>
                          <b>
                            Gender<span className={styles.star}>*</span>
                          </b>
                        </span>
                        <select
                          className={styles.input}
                          name="gender"
                          onBlur={formik.handleBlur}
                          value={formik.values.gender}
                          onChange={formik.handleChange}
                        >
                         
                          <option value="female">Female</option>
                          <option value="male">Male</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      {formik.touched.gender && formik.errors.gender ? (
                        <p className={styles.error}>{formik.errors.gender}</p>
                      ) : null}
                    </div>

                   
                    <div className={styles.inputDiv}>
                      <span className={styles.icon}>
                        <b>E-Mail</b>
                      </span>
                      <input
                        className={styles.input}
                        type="text"
                        placeholder={"E-mail"}
                        name="email"
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                      />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                      <p className={styles.error}>{formik.errors.email}</p>
                    ) : null}
                    <div className={styles.inputDiv}>
                      <span className={styles.icon}>
                        <b>
                          Address<span className={styles.star}>*</span>
                        </b>
                      </span>
                      <input
                        className={styles.input}
                        list="jobs"
                        placeholder="Pincode,City,District,State"
                        onBlur={formik.handleBlur}
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        // className={styles.Education}
                      />
                      <datalist id="jobs">
                        {pincodeList.map((val, i) => {
                          return <option key={i} value={val}></option>;
                        })}
                      </datalist>
                    </div>
                    {formik.touched.address && formik.errors.address ? (
                      <p className={styles.error}>{formik.errors.address}</p>
                    ) : null}
                  </div>
                ) : null}
              </div>

              {/* Education information form componets........................... */}
              <div className={styles.formOne} id="educations">
                <h2
                  className={styles.hover}
                  onClick={() => setShowEducation(!showEducation)}
                >
                  Add Education
                </h2>

                {showEducation ? (
                  <div className={styles.size}>
                    <div className={styles.inputDiv}>
                      <span className={styles.icon}>
                        <b>
                          Qualification<span className={styles.star}>*</span>
                        </b>
                      </span>
                      <input
                        className={styles.input}
                        list="education"
                        placeholder="Education"
                        name="education"
                        onBlur={formik.handleBlur}
                        value={formik.values.education}
                        onChange={formik.handleChange}
                      ></input>

                      <datalist id="education">
                        {educationForm.map((val, i) => {
                          return <option key={i} value={val}></option>;
                        })}
                      </datalist>
                    </div>
                    {formik.touched.education && formik.errors.education ? (
                      <p className={styles.error}>{formik.errors.education}</p>
                    ) : null}

                     <div className={styles.inputDiv}>
                      <span className={styles.icon}>
                        <b>
                          Specialization<span className={styles.star}>*</span>
                        </b>
                      </span>
                      <input
                        className={styles.input}
                        list="educationList"
                        placeholder="Specialization"
                        name="specialization"
                        onBlur={formik.handleBlur}
                        value={formik.values.specialization}
                        onChange={formik.handleChange}
                      ></input>

                      <datalist id="educationList">
                        {educations.map((val, i) => {
                          return <option key={i} value={val}></option>;
                        })}
                      </datalist>
                    </div>
                    {formik.touched.specialization && formik.errors.specialization ? (
                      <p className={styles.error}>{formik.errors.specialization}</p>
                    ) : null}

                    <div className={styles.inputDiv}>
                      <span className={styles.icon}>
                        <b> Year Of Passing<span className={styles.star}>*</span></b>
                      </span>
                      <input
                        className={styles.input}
                        type="month"
                        placeholder={"foo"}
                        onBlur={formik.handleBlur}
                        name="PassingYear"
                        value={formik.values.PassingYear}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.PassingYear &&
                      formik.errors.PassingYear ? (
                        <p className={styles.error}>
                          {formik.errors.PassingYear}
                        </p>
                      ) : null}
                    </div>
                    <div className={styles.inputDiv}>
                      <span className={styles.icon}>
                        <b>Year Gap</b>
                      </span>
                      <input
                        className={styles.input}
                        type="number"
                        placeholder={"Year Gap"}
                        onBlur={formik.handleBlur}
                        name="yearGap"
                        value={formik.values.yearGap}
                        onChange={formik.handleChange}
                      />
                    </div>
                    {formik.touched.yearGap && formik.errors.yearGap ? (
                      <p className={styles.error}>{formik.errors.yearGap}</p>
                    ) : null}
                    <div className={styles.inputDiv}>
                      <span className={styles.icon}>
                        <b>
                          College & University
                          <span className={styles.star}>*</span>
                        </b>
                      </span>
                      <input
                        className={styles.input}
                        list="collegeUniversity"
                        placeholder="College & University"
                        onBlur={formik.handleBlur}
                        name="collegeUniversity"
                        value={formik.values.collegeUniversity}
                        onChange={formik.handleChange}
                      />
                      <datalist id="collegeUniversity">
                        {univercity.map((val, i) => {
                          return <option key={i} value={val}></option>;
                        })}
                      </datalist>
                    </div>
                    {formik.touched.collegeUniversity &&
                    formik.errors.collegeUniversity ? (
                      <p className={styles.error}>
                        {formik.errors.collegeUniversity}
                      </p>
                    ) : null}

                    <div className={styles.inputDiv}>
                      <span className={styles.icon}>
                        <b>
                          Percentage<span className={styles.star}>*</span>
                        </b>
                      </span>
                      <input
                        className={styles.input}
                        type="number"
                        placeholder={"Percentage%"}
                        onBlur={formik.handleBlur}
                        name="CGPAPercentage"
                        value={formik.values.CGPAPercentage}
                        onChange={formik.handleChange}
                      />
                    </div>
                    {formik.touched.CGPAPercentage &&
                    formik.errors.CGPAPercentage ? (
                      <p className={styles.error}>
                        {formik.errors.CGPAPercentage}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>

              {/* Form of Jobdescription details........................... */}
              <div className={styles.formOne} id="jobDescription">
                <h2
                  className={styles.hover}
                  onClick={() => setShowJobDescription(!showJobDescription)}
                >
                  Add Job Description
                </h2>

                {showJobDescription ? (
                  <div className={styles.size}>
                    <div className={styles.inputDiv}>
                      <span className={styles.icon}>
                        <b>Sector<span className={styles.star}>*</span></b>
                      </span>
                      <input
                        className={styles.input}
                        list="sector"
                        placeholder="Sector"
                        name="sector"
                        onBlur={formik.handleBlur}
                        value={formik.values.sector}
                        onChange={formik.handleChange}
                      />
                      <datalist id="sector">
                        {SkillSector.map((val, i) => {
                          return (
                            <option key={val.name} value={val.value}></option>
                          );
                        })}
                      </datalist>
                      <div>
                        
                          {formik.touched.sector &&
                          formik.errors.sector ? (
                            <p className={styles.error}>
                              {formik.errors.sector}
                            </p>
                          ) : null}
                        </div>
                    </div>
                   

                    <div className={styles.inputDiv}>
                      <span className={styles.icon}>
                        <b>Skill<span className={styles.star}>*</span></b>
                      </span>
                      <input
                        className={styles.input}
                        list="skill"
                        placeholder="Skill"
                        name="skill"
                        onBlur={formik.handleBlur}
                        value={formik.values.skill}
                        onChange={formik.handleChange}
                      />
                      {/* <datalist id="skill">
                      {SkillSector.map(skill=>
                          formik.values.sector===skill.value && skill.skills.map(item=>
                            <option key={item.name} value={item.value} ></option>)
                          )}
                      </datalist> */}
                      <datalist id="skill">
                        {skills.map((val, i) => {
                          return <option key={i} value={val.value}></option>;
                        })}
                      </datalist>
                    </div>
                    {formik.touched.skill && formik.errors.skill ? (
                      <p className={styles.error}>{formik.errors.skill}</p>
                    ) : null}
                    
                    <div className={styles.inputDiv}>
                      <span className={styles.icon}>
                        <b>
                        Prefered Location<span className={styles.star}>*</span>
                        </b>
                      </span>
                      <input
                        
                        className={styles.input}
                        list="Prefered"
                        placeholder="Prefered Location"
                        name="prflocation"
                        onBlur={formik.handleBlur}
                        value={formik.values.prflocation}
                        onChange={formik.handleChange}
                      ></input>

                      <datalist    id="Prefered">
                        {state.map((val, i) => {
                          return <option key={i} value={val}></option>;
                        })}
                      </datalist>
                      
                    </div>
                    {formik.touched.prflocation && formik.errors.prflocation ? (
                      <p className={styles.error}>{formik.errors.prflocation}</p>
                    ) : null}
                    

                    <div className={styles.inputDiv}>
                      <span className={styles.icon}>
                        <b>Experience</b>
                      </span>
                      <input
                        className={styles.input}
                        type="number"
                        placeholder={"Experience"}
                        onBlur={formik.handleBlur}
                        name="experience"
                        value={formik.values.experience}
                        onChange={formik.handleChange}
                      />
                    </div>
                    {formik.touched.experience && formik.errors.experience ? (
                      <p className={styles.error}>{formik.errors.experience}</p>
                    ) : null}
                  </div>
                ) : null}
              </div>

               {/* Form of Resume upload details........................... */}
               <div className={styles.formOne} id="resumeUpload">
                <h2
                  className={styles.hover}
                  onClick={() => setShowResume(!showResume)}
                >
                  Attach Resume
                </h2>

                {showResume ? (
                 <div className={styles.r}>
               
     <div className={styles.e}>
         <label className={styles.s}>
             <div class={styles.u}>
                
                 <div className={styles.k}>
                 <img className={styles.t} src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image"/>
                 </div>
                 <p class="pointer-none text-gray-500 "><span class="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" class="text-blue-600 hover:underline">select a file</a> </p>
                
             </div>
             <input type="file"  class={styles.m}></input>
         </label>
     </div>
 </div>
                ) : null}
              </div>
              {/* Attach  resume end */}

              <div className={styles.buttonDiv}>
                <button type="submit" className={styles.button}>
                  Save
                </button>
              </div>

              {/* <div><button type='button' onClick={()=>getData()}>update</button></div> */}
              {/* {SkillSector.map(skill=>
                          formik.values.sector===skill.value && skill.skills.map(item=>
                            <div key={item.name} >{item.value}</div>)
                          )} */}
              {/* {SkillSector.map(skill=>
                         
                            <div key={skill.name} >{skill.value}</div>)
                          } */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
