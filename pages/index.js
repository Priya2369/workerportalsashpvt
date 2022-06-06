
import Open from "../Component/parentsComnents/Open";
import TestimonialSlide from "../Component/parentsComnents/TestimonialSlide";

import Flex from "../Component/Flex";
import Footer from "../Component/Footer";
import Whatsapp from "../Component/propComponents/Whatsapp";
// import { JobSearchContext } from "../Component/context/JobSearchContext";



export default function Home() {
  return (
    <>
      <Flex />

      <Open />

      {/* <div>
        <TestimonialSlide />
      </div> */}

      <Footer />
      
      <Whatsapp />
    </>
  );
}
