import { useState} from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import TestimonialData from '../array/TestimonialData'
import Testimonial from '../propComponents/Testimonial'
import styles from '../../styles/testimonal.module.css'

export default function TestimonialSlide(){

    const [current, setCurrent] = useState(0);
    const length = TestimonialData.length

    const nextSlide = () => { 
        console.log("working")
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };

      if (!Array.isArray(TestimonialData) || TestimonialData.length <= 0) {
        return null;
      }
    
    return(
        <>
        
        <div className={styles.slider}>
          <div>
	  < ArrowBackIosIcon  onClick={prevSlide} className={styles.leftArrow} fontSize='large'/>
	  < ArrowForwardIosIcon  onClick={nextSlide} className={styles.rightArrow} fontSize='large'/></div>
	  

	  {TestimonialData.map((val,index) => {
          return (
              
			  <div key={index}> 


              {index === current && (
                  <Testimonial image={val.image} uName={val.uName} skill={val.skill} 
                  Pline1={val.Pline1} 
                  // Pline2={val.Pline2} Pline3={val.Pline3}
                  />
              
              )}
                </div>
          );
        })}
		</div>
         
       
        </>
    )
}

