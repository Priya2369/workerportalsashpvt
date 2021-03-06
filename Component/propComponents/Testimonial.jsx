import Head from 'next/head'
import styles from '../../styles/testimonal.module.css'


export default function Testimonial(props) {
  return (
    <>
    {/* <div className={styles.mainDiv}> */}


<div className="testimonials-carousel-wrap">
    
    <div className={styles.testimonialsCarousel}>
        <div className={styles.swiperContainer}>
            <div className="swiper-wrapper">
                <div className={styles.swiperSlide}>
                    <div className={styles.testiItem}>
                        <div className={styles.testiAvatar}><img src={props.image} alt="Avatar" className={styles.Avatarimg}/>
</div></div>
                        
                        <div className={styles.testimonialsText}>
                            <div className="section-title">
                        
                                <div className={styles.testimonialsAvatar}>
                                    <h1>{props.uName}</h1>
                                    <h6 className={styles.SF}>{props.skill}</h6>
                                </div>
                               
                            </div>
                           <div className={styles.pGraph}><p className={styles.para}>"{props.Pline1}"</p></div> 
                            
                        </div>
                    
                    </div>
                </div>

                </div>
        </div>
    </div>

  
{/* </div> */}


    </>
  )
}