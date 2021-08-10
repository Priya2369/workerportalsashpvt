// import Head from "next/head";
// import { useState } from "react";
// import styles from "../styles/Home.module.css";
// import Process from "../Component/parentsComnents/Process";
// import Search from "../Component/parentsComnents/Search";
import Open from "../Component/parentsComnents/Open";
import TestimonialSlide from "../Component/parentsComnents/TestimonialSlide";

import Flex from "../Component/Flex";
import Footer from "../Component/Footer";
// import { JobSearchContext } from "../Component/context/JobSearchContext";



export default function Home() {
  return (
    <>
      <Flex />

      <Open />

      <div>
        <TestimonialSlide />
      </div>

      <Footer />
    </>
  );
}
