import React, { useState, useEffect, useContext } from 'react';
import styles from '../../styles/newUser.module.css'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import educationForm from '../array/educationForm'
import pincode from '../array/pincodeCityDistrictState'
import { useFormik, FieldArray } from "formik";
import validation from '../validation/userValidation'
import education from '../array/education'
import { getCookies } from "../config/FirebaseToken";
import { toast } from "react-toastify";
import axios from "axios";
import {userContext} from '../context/UserContext'
import { API_CONSTANTS} from '../config/apiConstant'
import { useRouter } from 'next/router'



toast.configure();


export default function AddressForm() {
  const {  setShowHeader} = useContext(userContext);
  const router = useRouter();
  const [educationData, setEducationData] = useState("");

  const[show, setShow] = useState(false)
  const paperStyle = { padding: '30px 20px', width: 700, margin: "20px auto",   }
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      date: "",
      gender: "",
      email: "",
      address: "",
      educationList:"",
      education: "",
      termCondition: false,
    },
    validate: validation,
    onSubmit: async (values,{resetForm}) => {
      const testDefault = {
        generalData: {
           registerBy: "self",
          name: values.firstName.trim() + " " + values.lastName.trim(),
          dateOfBirth: values.date,
          // age: Number(values.age),
          gender: values.gender,
          // mobileNumber: phoneNo,
          email: values.email,
          pinCode: values.address.split(",")[0].trim(),
          address: values.address,
        },
        skillData: {
         
          education: values.education,

         
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
        setShowHeader(true)
        localStorage.setItem("user_info",JSON.stringify(res.data.profile))
        
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
       router.push('/jobs');
       setNaShow(true)
    },
  })
  useEffect(() => {
    if (educationData === "Graduate" || educationData === "Diploma" || educationData === "12th" || educationData === "B.Tech") {
      setShow(true)
    } else if (educationData === "10th Pass" || educationData === "Below 10th") {
      setShow(false)
    }
  }, [educationData]);
  return (
    <>
     <form onSubmit={formik.handleSubmit}>
     
     <Typography variant="h6" align="center"
     >
        Registration Form
      </Typography>
      <Grid container spacing={3}  style={paperStyle}>
        
        <Grid item xs={12} sm={6}>
        <label className="custom-field two">
        <input type="text" placeholder="&nbsp;"
        onBlur={formik.handleBlur}
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange} autoComplete="off"/>
        <span className="placeholder">First Name</span>
      </label>
          {formik.touched.firstName && formik.errors.firstName ? (
                        <p className={styles.error}>{formik.errors.firstName}</p>
                      ) : null}
          
        </Grid>
        <Grid item xs={12} sm={6}>
        <label className="custom-field two">
        <input type="text" placeholder="&nbsp;" 
        onBlur={formik.handleBlur}
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}/>
        <span className="placeholder">Last Name</span>
      </label>
           {formik.touched.lastName && formik.errors.lastName ? (
                        <p className={styles.error}>{formik.errors.lastName}</p>
                      ) : null}
        </Grid>
        <Grid item xs={12}>
        <label className="custom-field two">
        <input type="date" placeholder="&nbspn ;"
         onBlur={formik.handleBlur}
         name="date"
         value={formik.values.date}
         onChange={formik.handleChange}/>
        <span className="placeholder">DOB</span>
      </label>
        </Grid>
        <Grid item xs={12} >
        <FormControl component="fieldset">
         <FormLabel component="legend">Gender</FormLabel>
       <RadioGroup aria-label="gender"  style={{ display: 'initial' }} name="gender"
        value={formik.values.gender}
        onChange={formik.handleChange} >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
       </RadioGroup> 
       </FormControl>
        </Grid>
        <Grid item xs={12}>
        
      <label className="custom-field two">
        <input list="education" type="text" placeholder="&nbsp;"
         onBlur={formik.handleBlur}
         name="education"
         value={formik.values.education}
         onChange={(e) => {
          formik.handleChange(e);
          setEducationData(e.target.value)
        }}/>
        
        <span className="placeholder">Education</span>
        <datalist id="education">
                      {educationForm.map((val, i) => {
                        return <option key={i} value={val}></option>;
                      })}
                    </datalist>
      </label>
      
  
    {formik.touched.education && formik.errors.education ? (
                        <p className={styles.error}>{formik.errors.education}</p>
                      ) : null}
    
                      
        </Grid>

       {show? <Grid item xs={12} >
       <label className="custom-field two">
        <input list="educationList" type="text" placeholder="&nbsp;"
         onBlur={formik.handleBlur}
         name="educationList"
         value={formik.values.educationList}
         onChange={formik.handleChange}/>
        
        <span className="placeholder">Specialization</span>
        <datalist id="educationList">
                      {education.map((val, i) => {
                        return <option key={i} value={val}></option>;
                      })}
                    </datalist>
      </label>
        </Grid>:null}
        
        <Grid item xs={12} >
        <label className="custom-field two">
        <input list="pin" type="text" placeholder="&nbsp;" 
        onBlur={formik.handleBlur}
        name="address"
        value={formik.values.address}
        onChange={formik.handleChange}/>
        
        <span className="placeholder">Pincode</span>
        <datalist id="pin">
                      {pincode.map((val, i) => {
                        return <option key={i} value={val}></option>;
                      })}
                    </datalist>
      </label>
      {formik.touched.address && formik.errors.address ? (
                        <p className={styles.error}>{formik.errors.address}</p>
                      ) : null}
        </Grid>



        <Grid item xs={12} >
        <label className="custom-field two">
        <input type="text" placeholder="&nbsp;"
        onBlur={formik.handleBlur}
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}/>
        <span className="placeholder">Email</span>
      </label>
      {formik.touched.email && formik.errors.email ? (
                        <p className={styles.error}>{formik.errors.email}</p>
                      ) : null}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes"  name="termCondition"
            value={formik.values.termCondition}
           onChange={formik.handleChange} />}
            label="Agree To All Conditions"
          />
        </Grid>
        <Grid item xs={12}><div className="newUserbtns"><Button align="center" variant="contained" 
        color="primary" type="submit" fullWidth
        >
        Register
      </Button></div></Grid>

      </Grid>
      
      </form>
    </>
  );
}
