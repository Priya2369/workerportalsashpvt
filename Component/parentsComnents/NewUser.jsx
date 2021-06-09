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
import { FieldArray, Formik, Form, Field } from "formik";
import validation from '../validation/userValidation'
import educations from '../array/education'
import { getCookies } from "../config/FirebaseToken";
import { toast } from "react-toastify";
import axios from "axios";
import { userContext } from '../context/UserContext'
import { API_CONSTANTS } from '../config/apiConstant'
import { useRouter } from 'next/router'
import * as Yup from 'yup'


toast.configure();


export default function AddressForm() {
  console.log(validation)

  const { setNaShow } = useContext(userContext);
  const router = useRouter();


  const [show, setShow] = useState(false)
  const [educationData, setEducationData] = useState("");

  const paperStyle = { padding: '30px 20px', width: 700, margin: "20px auto", }
  const initialValues = {
    firstName: "",
    lastName: "",
    date: "",
    gender: "",
    email: "",
    address: "",
    educationList: "",
    education: "",
    termCondition: false,
  }

  const validationSchema = Yup.object().shape({

    firstName: Yup.string().required("required"),
    lastName:Yup.string().required("required"),
    date:Yup.date().required("required").min('1940-09-28').max('2005-05-23'),
    gender: Yup.string().oneOf(["male", "female", "other"], "Required").required("required"),
    email:Yup.string().required("email is required").email("Email is invalid"),
    address: Yup.string().required("required"),
    education: Yup.string().required("required"),
    // termsAndCondition:Yup.string().required("required"),

  })

  const onSubmit = async (values) => {
    console.log(values.firstName)
    const testDefault = {
      generalData: {
        registerBy: "self",
        name: values.firstName + " " + values.lastName,
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
      //   props = useprops('')
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
      console.log("name" + props.values.passingYear);
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
  }


  // function educationData(values) {
  //   console.log(values)
  //   if (values === "Graduate" || values === "Diploma" || values === "12th" || values === "B.Tech") {
  //     setShow(true)
  //   } else if (values === "10th Pass" || values === "Below 10th") {
  //     setShow(false)
  //   }
  //   console.log(show);
  // }

  useEffect(() => {
    if (educationData === "Graduate" || educationData === "Diploma" || educationData === "12th" || educationData === "B.Tech") {
      setShow(true)
    } else if (educationData === "10th Pass" || educationData === "Below 10th") {
      setShow(false)
    }
  }, [educationData]);

  return (
    <>
      <Formik initialValues={initialValues}
        validationSchema={validationSchema} onSubmit={onSubmit}>

        {props => (
          <form onSubmit={props.handleSubmit}>


            <Grid container spacing={3} style={paperStyle}>

              <Grid item xs={12} sm={6}>
                <label className="custom-field two">
                  <input type="text" placeholder="&nbsp;"
                    onBlur={props.handleBlur}
                    name="firstName"
                    value={props.values.firstName}
                    onChange={props.handleChange} autoComplete="off" />
                  <span className="placeholder">First Name</span>
                </label>
                {props.touched.firstName && props.errors.firstName ? (
                  <p className={styles.error}>{props.errors.firstName}</p>
                ) : null}

              </Grid>
              <Grid item xs={12} sm={6}>
                <label className="custom-field two">
                  <input type="text" placeholder="&nbsp;"
                    onBlur={props.handleBlur}
                    name="lastName"
                    value={props.values.lastName}
                    onChange={props.handleChange} />
                  <span className="placeholder">Last Name</span>
                </label>
                {props.touched.lastName && props.errors.lastName ? (
                  <p className={styles.error}>{props.errors.lastName}</p>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <label className="custom-field two">
                  <input type="date" placeholder="&nbspn ;"
                    onBlur={props.handleBlur}
                    name="date"
                    value={props.values.date}
                    onChange={props.handleChange} />
                  <span className="placeholder">DOB</span>
                </label>
              </Grid>
              <Grid item xs={12} >
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup aria-label="gender" style={{ display: 'initial' }} name="gender"
                    value={props.values.gender}
                    onChange={props.handleChange} >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />

                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>

                <label className="custom-field two">
                  <input list="education" type="text" placeholder="&nbsp;"
                    onBlur={props.handleBlur}
                    name="education"
                    value={educationData}
                    onChange={(e) => {
                      props.handleChange(e);
                      setEducationData(e.target.value)
                    }} />
                  <span className="placeholder">Education</span>
                  <datalist id="education">
                    {educationForm.map((val, i) => {
                      return <option key={i} value={val}></option>;
                    })}
                  </datalist>
                </label>


                {props.touched.education && props.errors.education ? (
                  <p className={styles.error}>{props.errors.education}</p>
                ) : null}


              </Grid>

              {show ? <Grid item xs={12} >
                <label className="custom-field two">
                  <input list="educationList" type="text" placeholder="&nbsp;"
                    onBlur={props.handleBlur}
                    name="educationList"
                    value={props.values.educationList}
                    onChange={props.handleChange} />

                  <span className="placeholder">Specialization</span>
                  <datalist id="educationList">
                    {educations.map((val, i) => {
                      return <option key={i} value={val}></option>;
                    })}
                  </datalist>
                </label>
              </Grid> : null}

              <Grid item xs={12} >
                <label className="custom-field two">
                  <input list="pin" type="text" placeholder="&nbsp;"
                    onBlur={props.handleBlur}
                    name="address"
                    value={props.values.address}
                    onChange={props.handleChange} />

                  <span className="placeholder">Pincode</span>
                  <datalist id="pin">
                    {pincode.map((val, i) => {
                      return <option key={i} value={val}></option>;
                    })}
                  </datalist>
                </label>
                {props.touched.address && props.errors.address ? (
                  <p className={styles.error}>{props.errors.address}</p>
                ) : null}
              </Grid>



              <Grid item xs={12} >
                <label className="custom-field two">
                  <input type="text" placeholder="&nbsp;"
                    onBlur={props.handleBlur}
                    name="email"
                    value={props.values.email}
                    onChange={props.handleChange} />
                  <span className="placeholder">Email</span>
                </label>
                {props.touched.email && props.errors.email ? (
                  <p className={styles.error}>{props.errors.email}</p>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="secondary" name="saveAddress" value="yes" name="termCondition"
                    value={props.values.termCondition}
                    onChange={props.handleChange} />}
                  label="Agree To All Conditions"
                />
              </Grid>
              <Grid item xs={12}><Button align="center" variant="contained"
                color="primary" type="submit" fullWidth
              >
                Register
              </Button></Grid>

            </Grid>

          </form>
        )}
      </Formik>
    </>
  );
}
