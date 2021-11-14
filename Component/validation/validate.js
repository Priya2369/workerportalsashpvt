import * as yup from "yup";

import {
  calculateAge,
  valdPassYear,
  Specialization,
} from "../config/calculateAge";
import Specializations from "../array/education";
import Educations from "../array/educationForm";
import pincodeList from "../array/pincodeCityDistrictState";
import univercity from "../array/university";
import SkillSector from "../array/skillSector";
import skills from "../array/skill";
import state from "../array/state"

const Validation = (values) => {
  

  let {
    firstName,
    lastName,
    date,

    gender,
    age,
    email,
    address,
    prflocation,
    education,
    specialization,
    PassingYear,
    yearGap,
    collegeUniversity,
    CGPAPercentage,
    interestArea,

    sector,
    skill,
    experience,
    termCondition,
  } = values;
  let errors = {};
  if (!firstName) {
    errors.firstName = " First Name is required";
  } else if (
    firstName.trim().length < 4 ||
    firstName.trim().length > 20 ||
    !/^[a-z ]([a-z,.'-]*)+(\s[a-z,.'-]+)*$/i.test(values.firstName)
  ) {
    errors.firstName =
      "First name should be alphabetic and atleast 4-20 character long";
  }

  if (!lastName) {
    errors.lastName = "Last Name is required";
  } else if (
    lastName.trim().length < 3 ||
    lastName.trim().length > 20 ||
    !/^[a-z ]([a-z,.'-]*)+(\s[a-z,.'-]+)*$/i.test(values.lastName)
  ) {
    errors.lastName =
      "last name should be alphabetic and atleast 4-20 character long";
  }

  // Validation for email
  if (!email) {
    errors.email = " Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  // validation for date
  if (!date) {
    errors.date = "Date Is Required";
  } else if (calculateAge(date) > 80 || calculateAge(date) < 16) {
    errors.date = " Not eligible";
  }

  // validation for gender
  if (!gender) {
    errors.gender = " Gender Required";
  }

  // validation for address
  if (!address) {
    errors.address = "Address is Required";
  }else if (!pincodeList.includes(address)) {
    errors.address = "Select from list";
  }

  // validation for education
  if (!education) {
    errors.education = " please Fill Your Education";
  } else if (!Educations.includes(education)) {
    errors.education = "Select from list";
  }

  if (yearGap < 0 || yearGap > 50) {
    errors.yearGap = "Must be a safe number";
  }

  if (!collegeUniversity) {
    errors.collegeUniversity = "Please Fill The Field";
  }else if (!univercity.includes(collegeUniversity)) {
    errors.collegeUniversity = "Select from list";
  }

  if (!CGPAPercentage) {
    errors.CGPAPercentage = "Please Fill The Field";
  } else if (CGPAPercentage > 100 || CGPAPercentage < 0) {
    errors.CGPAPercentage = "Percentage should be 0 to 100";
  }

  if (!valdPassYear(PassingYear)) {
    errors.PassingYear = "Must be a safe year";
  }

  if (!sector) {
    errors.sector = "Please Fill The Field";
  }else if (!SkillSector.includes(sector)) {
    errors.sector = "Select from list";
  }

  if (!skill) {
    errors.skill = "Please Fill The Field";
  }else if (!skills.includes(skill)) {
    errors.skill = "Select from list";
  }

  if (!prflocation) {
    errors.prflocation = "Please Fill The Preferred Location";
  }else if (!state.includes(prflocation)) {
    errors.prflocation = "Select from list";
  }

  if (experience > 40 || experience < 0) {
    errors.experience = "Must be a safe number";
  }

  if (!specialization) {
    errors.specialization = "Please Fill The specialization";
  } else if (!Specializations.includes(specialization)) {
    errors.specialization = "Select from list";
  }
  return errors;
};

export default Validation;
