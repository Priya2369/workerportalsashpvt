import Head from 'next/head'
import styles from '../../styles/featuredJob.module.css'

export default function FeaturedJob(props) {
  return (
    <>
    <article className={styles.jobCard}>
        <div className="m"></div>
        <div className={styles.companyLogoImg}>
          <img src={props.image} />
        </div>
        <div className={styles.jobTitle}>{props.company}</div>
        <div className={styles.skillsContainer}>
          <div className={styles.skill}>{props.skill}</div>
          <div className={styles.skill}> {props.location}</div>
          <div className={styles.skill}>{props.salary}</div>
        </div>
        <button className={styles.apply}>{props.dutyTime}</button>
      
      </article>
    </>
  )
}