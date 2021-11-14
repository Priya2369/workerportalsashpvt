import Head from "next/head";
import { React, useState, useEffect } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";
import axios from "axios";
import { API_CONSTANTS } from "../config/apiConstant";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField, Button, FormHelperText } from "@material-ui/core";
// import "./contact.module.css";
import styles from "../../styles/contact.module.css";

import { faMarker } from "@fortawesome/free-solid-svg-icons";
import { useFormik, FieldArray } from "formik";

toast.configure();

export default function ContactUs() {
  // const [detail, setDetail] = useState({
  //     name:'',
  //     email:'',
  //     No:'',
  //     message:'',
  //     })
  const validationSchema = Yup.object().shape({
    name: Yup
    .string()
    .matches(/^[a-z]([a-z,.'-]*)+(\s[a-z,.'-]+)*$/i, 'Please enter valid name')
    .max(40)
    .required("Name is required"),
    email:  Yup.string()
    .required("Email is required")
    .email("Enter valid email").trim(),
    No: Yup.string()
    .required("Mobile number is required")
    .matches(/^[6-9]\d{9}$/, {
      message: "Please enter valid number.",
      excludeEmptyString: false,
    }),
    message:Yup.string().required("Message is required").trim().min(20).max(100000)
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      No: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      let config = {
        method: "post",
        url: `${API_CONSTANTS.baseUrl + API_CONSTANTS.contact.CONTACT}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: values,
      };

      try {
        const response = await axios(config);
        console.log(response);
        if (response.status == 200) {
          toast.success("Message sent sucessfully", {
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            position: "bottom-right",
            autoClose: 5000,
          });

        }
        resetForm()
      } catch (err) {
        console.log(err);
        toast.error(err, {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          position: "bottom-right",
          autoClose: 5000,
        });
      }
    },
  });

  //    async function submit(e){
  //        e.preventDefault();
  //        console.log(detail)

  //        let config = {
  //         method: 'post',
  //         url: `${API_CONSTANTS.baseUrl+API_CONSTANTS.contact.CONTACT}`,
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         data: detail,
  //       };

  //       try {
  //         const response = await axios(config);
  //         console.log(response);
  //         if (response.status == 200) {

  //         toast.success("Email sent sucessfully", {
  //                         hideProgressBar: true,
  //                         closeOnClick: true,
  //                         pauseOnHover: true,
  //                         draggable: true,
  //                         progress: undefined,
  //                         position: "bottom-right",
  //                         autoClose: 5000,
  //                       });
  //         }
  //       } catch (err) {
  //           console.log(err)
  //           toast.error(err, {
  //             hideProgressBar: true,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             position: "bottom-right",
  //             autoClose: 5000,
  //           });
  //       }

  //    }

  //    ...............................

//   useEffect(() => {});
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.box}>
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.nameDiv}>
              <input
                type="text"
                placeholder="Full Name"
                className={styles.fullName}
                onBlur={formik.handleBlur}
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange} autoComplete="off"
                required
              />
              <div className={styles.nameError}>
             <FormHelperText error> {formik.touched.name && formik.errors.name ? (
                        <p className={styles.error}>{formik.errors.name}</p>
                      ) : null}</FormHelperText></div>
            </div>
            {/* <div className={styles.form}>{formik.touched.name && formik.errors.name ? (
                        <p className={styles.error}>{formik.errors.name}</p>
                      ) : null}</div> */}
            <div className={styles.form}>
              <div className={styles.formgroup}>
                <input
                  type="text"
                  placeholder="Email"
                  className={styles.formcontrole}
                  onBlur={formik.handleBlur}
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange} autoComplete="off"
                />
                 <FormHelperText error>
                 {formik.touched.email && formik.errors.email ? (
                        <p className={styles.error}>{formik.errors.email}</p>
                      ) : null} 
                  </FormHelperText>
                
              </div>
              <div className={styles.formgroup}>
                <input
                  type="text"
                  placeholder="Phone No"
                  className={styles.formcontrolp}
                  onBlur={formik.handleBlur}
                name="No"
                value={formik.values.No}
                onChange={formik.handleChange} autoComplete="off"
                />
                 <FormHelperText error> {formik.touched.No && formik.errors.No ? (
                        <p className={styles.error}>{formik.errors.No}</p>
                      ) : null}</FormHelperText>
              </div>
            </div>
            <div>
              <textarea
                type="text"
                placeholder="message"
                className={styles.msg}
                onBlur={formik.handleBlur}
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange} autoComplete="off"
              ></textarea>
              <div className={styles.messageError}>
               <FormHelperText error>
              {formik.touched.message && formik.errors.message ? (
                        <p className={styles.error}>{formik.errors.message}</p>
                      ) : null}</FormHelperText></div>
            </div>

            <div className={styles.btn}>
              <button className={styles.submit}>Send</button>
            </div>
          </form>
        </div>
        <div className={styles.box1}>
          <div className={styles.cntinf}> CONTACT INFO</div>
          <ul className={styles.ul}>
            <FontAwesomeIcon icon={faMap} className={styles.map} />
            <ul className={styles.loc}>
              Plot N3/447,IRC Village,<br></br>
              Bhubaneswar,Odisha-751018(IN)<br></br>
              <br></br>
            </ul>
          </ul>
          <div className={styles.inf}>
            <ul>
              <FontAwesomeIcon icon={faEnvelope} className={styles.env} />
              info@mosahay.info
            </ul>
          </div>
          <div className={styles.mapouter}>
            <div className={styles.gmap_canvas}>
              <iframe
                className={styles.gmap_iframe}
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29938.693952551792!2d85.79515192789019!3d20.286324079919837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d626fffc1d%3A0xe19f5ac0b78f8e62!2sNayapalli%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1626177707843!5m2!1sen!2sin"
              ></iframe>
              <a href="https://www.embedmymap.com/">Embed My Map</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
