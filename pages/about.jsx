import AboutUs from '../Component/parentsComnents/AboutUs'
import Flex from '../Component/Flex'
import Testimonial from '../Component/propComponents/Testimonial'
import TestimonialData from '../Component/array/TestimonialData'

const About = () =>{
    return(
        <>
        <div> <Flex line1="About us"/></div>
        <div><AboutUs/></div>

        {/* {TestimonialData.map((val) => {
          return (
            <Testimonial image={val.image} uName={val.uName} skill={val.skill} 
			Pline1={val.Pline1} Pline2={val.Pline2} Pline3={val.Pline3}/>
          );
        })} */}
        </>
    )
}

export default About;