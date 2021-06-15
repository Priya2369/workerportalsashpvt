import { React, useState, useEffect, useContext } from "react";
import {userContext} from '../context/UserContext'
import { useFormik, FieldArray } from "formik";
import validation from "../validation/validate";
import pincodeList from "../array/pincodeCityDistrictState";
import educations from "../array/education";
import univercity from "../array/university";
import { API_CONSTANTS } from "../config/apiConstant";
import { getCookies } from "../config/FirebaseToken";
import axios from "axios";
import styles from "../../styles/profileForm.module.css";
import { toast } from "react-toastify";
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';

import { FaUser, 
  
  FaEnvelope, 
  FaGraduationCap,
  FaBusinessTime,
  FaAddressBook,
   FaCalendar, 
   FaBookOpen, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-scroll";
// import {StickyContainer, Sticky} from 'react-sticky'
import StickyBox from "react-sticky-box";
toast.configure();


const ProfileUpdate = () => {


  const { detail, singleUser} = useContext(userContext);
  const [showProfile, setShowprofile] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showJobDescription, setShowJobDescription] = useState(false);
  const [showCondition, setShowCondition] = useState(false);
  const [profileName, setProfileName] = useState({})
  

console.log("profile............................")
  
console.log(singleUser)
useEffect(() => {
    async function getData() {
      console.log("run....................")
      try{
    const reqUrl =
          API_CONSTANTS.baseUrl + API_CONSTANTS.enrollment.SELF_PROFILE;
          let res = await axios.get(reqUrl,{
            headers: {
              // authorization:cookies.get('access_token') ,
              authorization: getCookies(),
            },
          });
          console.log(res.data.data)
          setProfileName(res.data.data.generalData)
          
          console.log("single data")
        //  general data custom input 
          formik.setFieldValue("firstName",res.data.data.generalData.name.split(",")[0].trim())
          formik.setFieldValue("lastName",res.data.data.generalData.name.split(",")[0].trim())
          formik.setFieldValue("address",res.data.data.generalData.address)
          // formik.setFieldValue("date",res.data.data.generalData.dateOfBirth)
          formik.setFieldValue("gender",res.data.data.generalData.gender)
          // formik.setFieldValue("age",res.data.data.generalData.age)
          formik.setFieldValue("email",res.data.data.generalData.email)
          // skill data
          formik.setFieldValue("passingYear",res.data.data.generalData.email)
          formik.setFieldValue("education",res.data.data.skillData.education)
          
          
        }catch (error){ 
          console.log(error.message)
        }


        }
        getData()
      },[])

 
       





  const formik = useFormik( {
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
      PassingYear: "",
      yearGap: "",
      collegeUniversity: "",
      CGPAPercentage: "",
      interestArea: "",
      prefferedLocation: [""],
      sector: "",
      skill: "",
      experience: "",
      termCondition: false, 
    },
    validate: validation,
    onSubmit: async (values,{resetForm}) => {
      const testDefault = {
        generalData: {
          registerBy: "self",
          name: values.firstName + " " + values.lastName,
          dateOfBirth: values.date,
          age: Number(values.age),
          gender: values.gender,
          // mobileNumber: phoneNo,
          email: values.email,
          pinCode: values.address.split(",")[0].trim(),
          address: values.address,
        },
        skillData: {
          sectors: [
            values.sector,
            // "agriculture"
          ],
          sectorsOther: ["string"],
          skills: [
            values.skill,
            // "poultry farmer"
          ],
          skillsOther: ["string"],
          experience: values.experience,

          education: "passed primary (class 8th)",

          college: values.collegeUniversity,
          mark: values.CGPAPercentage,
          passingYear: values.PassingYear,
          yearGap: values.yearGap.split("-")[0].trim(),

          preferredLocations: ["odisha"],
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
      console.log(values);
      try {
        console.log("post data started");
        console.log(getCookies());
        const reqUrl =
          API_CONSTANTS.baseUrl + API_CONSTANTS.enrollment.UPDATE_MANPOWER;
        const res = await axios.post(reqUrl, testDefault, {
          headers: {
            // authorization:cookies.get('access_token') ,
            authorization: getCookies(),
          },
        });
        //   formik = useFormik('')
        toast.success("data submitted sucessfully", {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          position: "bottom-right",
          autoClose: 5000,
        });

        console.log(res["message"]);
        console.log("name" + formik.values.passingYear);
      } catch (error) {
        console.log(`Error: ${error}`);
        toast.error(error.message, {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          position: "bottom-right",
          autoClose: 5000,
        });
      }
      resetForm({values:''})
    },

    // submitt end......
  });
  //   console.log(formik.values)

  return (
    <>
      

      {/* profile Header */}
      {/* <div className={styles.Header}>
          <div className={styles.left}>
             <div className={styles.imgs}><img src='./3.jpg'/></div>
             <div className={styles.dats}>
             
               <div className={styles.name}><h1>{profileName.name}</h1><CreateOutlinedIcon fontSize="small"/></div>
               <div className={styles.phone}><PhoneEnabledOutlinedIcon fontSize="small"/> &nbsp; &nbsp; {profileName.mobileNumber}</div>
               <div className={styles.email}><EmailOutlinedIcon fontSize="small"/>&nbsp; &nbsp;{profileName.email}</div>
               <div className={styles.exp}><BusinessCenterOutlinedIcon fontSize="small"/>&nbsp; &nbsp;1 year 6 month</div>
               
             </div>
          </div>
          <div className={styles.right}>

             Applied Job
          </div>
      </div> */}



      <div>
        <div className={styles.tab}>
          <h2>Quick Link</h2>
          <button className={styles.p}>
           
          <Link to="profile"
            smooth={true}
            duration={1000} className={styles.tablinks}>Profile</Link>
            </button>
          <button className={styles.p}><Link to="educations"
            smooth={true}
            duration={1000} className={styles.tablinks}>Education</Link></button>
          <button className={styles.p}><Link className={styles.tablinks}
            
            to="jobDescription"
            smooth={true}
            duration={1000}
          >
            Job Description
          </Link></button>
          <button className={styles.p}><Link to="condition"
            smooth={true}
            duration={1000} className={styles.tablinks}>Terms & Conditions</Link></button>
        </div>

        {/* ............................................ */}


        <div className={styles.tab2}>
          <form onSubmit={formik.handleSubmit}>
{/* profile information form componets */}
            <div className={styles.formOne} id="profile">
              <h2
                className={styles.hover}
                onClick={() => setShowprofile(!showProfile)}
              >
                Add Profile
                
              </h2>
              {showProfile ? (
                <div>
                  <div className={styles.firstLastName}>
                    <div className={styles.inputDiv}>
                      <span className={styles.icon}>
                        <FaUser />
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
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <p className={styles.error}>{formik.errors.firstName}</p>
                      ) : null}
                    </div>
                    <div className={styles.inputDiv}>
                      <span className={styles.icon}>
                        <FaUser />
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
                        <p className={styles.error}>{formik.errors.lastName}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className={styles.firstLastName}>
                  <div className={styles.inputDiv}>
                  <span className={styles.icon}>
                        <FaCalendar />
                      </span>
                    <input
                      className={styles.input}
                      type="date"
                      name="date"
                      value={formik.values.date}
                      onChange={formik.handleChange}
                      placeholder={"Date of birth"}
                    />
                  </div>

                  <div className={styles.inputDiv}>
                    <span className={styles.icon}>
                      <FaUser />
                    </span>
                    <select
                      className={styles.input}
                      name="gender"
                      onBlur={formik.handleBlur}
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                     >
                      <option value="gender">Gender</option>
                      <option value="female">female</option>
                      <option value="male">male</option>
                      <option value="other">other</option>
                    </select>
                  </div>
                  {formik.touched.gender && formik.errors.gender ? (
                    <p className={styles.error}>{formik.errors.gender}</p>
                  ) : null}
                  </div>



                  <div className={styles.inputDiv}>
                    <span className={styles.icon}>
                      <FaUser />
                    </span>
                    <input
                      className={styles.input}
                      type="number"
                      placeholder={"Age"}
                      onBlur={formik.handleBlur}
                      name="age"
                      value={formik.values.age}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.age && formik.errors.age ? (
                    <p className={styles.error}>{formik.errors.age}</p>
                  ) : null}
                  <div className={styles.inputDiv}>
                    <span className={styles.icon}>
                      <FaEnvelope />
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
                      <FaAddressBook />
                    </span>
                    <input
                      className={styles.input}
                      list="jobs"
                      placeholder="address"
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
                <div>
                  <div className={styles.inputDiv}>
                    <span className={styles.icon}>
                      <FaBookOpen />
                    </span>
                    <input
                      className={styles.input}
                      list="education"
                      placeholder="education"
                      name="education"
                      onBlur={formik.handleBlur}
                      value={formik.values.education}
                      onChange={formik.handleChange}
                    ></input>

                    <datalist id="education">
                      {educations.map((val, i) => {
                        return <option key={i} value={val}></option>;
                      })}
                    </datalist>
                  </div>
                  {formik.touched.education && formik.errors.education ? (
                    <p className={styles.error}>{formik.errors.education}</p>
                  ) : null}
                  <div className={styles.inputDiv}>
                    <span className={styles.icon}>
                      <FaCalendar />
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
                  </div>
                  <div className={styles.inputDiv}>
                    <span className={styles.icon}>
                      <FaCalendar />
                    </span>
                    <input
                      className={styles.input}
                      type="tept"
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
                      <FaGraduationCap />
                    </span>
                    <input
                      className={styles.input}
                      list="collegeUniversity"
                      placeholder="collegeUniversity"
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
                    <p className={styles.error}>{formik.errors.collegeUniversity}</p>
                  ) : null}

                  <div className={styles.inputDiv}>
                    <span className={styles.icon}>
                      <FaGraduationCap />
                    </span>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder={"CGPA/Percentage%"}
                      onBlur={formik.handleBlur}
                      name="CGPAPercentage"
                      value={formik.values.CGPAPercentage}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.CGPAPercentage &&
                  formik.errors.CGPAPercentage ? (
                    <p className={styles.error}>{formik.errors.CGPAPercentage}</p>
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
                Add Jobdescription
              </h2>

              {showJobDescription ? (
                <div>
                  <div className={styles.inputDiv}>
                    <span className={styles.icon}>
                      <FaLocationArrow />
                    </span>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder={"Interest Area"}
                      onBlur={formik.handleBlur}
                      name="interestArea"
                      value={formik.values.interestArea}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.interestArea && formik.errors.interestArea ? (
                    <p className={styles.error}>{formik.errors.interestArea}</p>
                  ) : null}

                  <div className={styles.inputDiv}>
                    <span className={styles.icon}>
                      <FaUser />
                    </span>
                    <input
                      className={styles.input}
                      list="sector"
                      placeholder="sector"
                      name="sector"
                      onBlur={formik.handleBlur}
                      value={formik.values.sector}
                      onChange={formik.handleChange}
                    />
                    <datalist id="sector">
                      <option value="front-end developer"></option>
                      <option value="Back-end developer"></option>
                      <option value="Software developer"></option>
                    </datalist>
                  </div>
                  {formik.touched.sector && formik.errors.sector ? (
                    <p className={styles.error}>{formik.errors.sector}</p>
                  ) : null}

                  <div className={styles.inputDiv}>
                    <span className={styles.icon}>
                      <FaUser />
                    </span>
                    <input
                      className={styles.input}
                      list="skill"
                      placeholder="skill"
                      name="skill"
                      onBlur={formik.handleBlur}
                      value={formik.values.skill}
                      onChange={formik.handleChange}
                    />
                    <datalist id="skill">
                      <option value="front-end developer"></option>
                      <option value="Back-end developer"></option>
                      <option value="Software developer"></option>
                    </datalist>
                  </div>
                  {formik.touched.skill && formik.errors.skill ? (
                    <p className={styles.error}>{formik.errors.skill}</p>
                  ) : null}

                  <div className={styles.inputDiv}>
                    <span className={styles.icon}>
                      <FaUser />
                    </span>
                    <input
                      className={styles.input}
                      type="text"
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

            {/* Term and condition .......................................... */} 
            <div className={styles.formOne} id="condition">
            <h2
                className={styles.hover}
                onClick={() => setShowCondition(!showCondition)}
              >
                Accept the Term&Condtion
              </h2>
              {showCondition?
              <div className={styles.box}>
              <ul className={styles.ul}>
                  <li>I am 18 and above.</li>
                  <li>If hired,I agree to abide by all of the company rules and regulations.<br/>
                      I agree that in the event my employment may be terminated at any time by either party
                      for any reason or for no reason. </li>
                  <li>I accept all the above information given are correct.</li>
              </ul>
              <div className={styles.tacbox}>
                  <input  type="checkbox" 
                   name="termCondition"
                   value={formik.values.termCondition}
                  onChange={formik.handleChange} />
                  <label htmlFor="checkbox" > Agree To All Conditions</label>
              </div>
          </div>
          :null}

            </div>

            <div className={styles.buttonDiv}><button type="submit" className={styles.button}>Save</button></div>
            {/* <div><button type='button' onClick={()=>getData()}>update</button></div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
