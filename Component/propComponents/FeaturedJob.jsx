import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/featuredJob.module.css'
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
export default function FeaturedJob(props) {
  const router = useRouter();
  function handleLogin(){
    router.push('/signup');
  }
  return (
    <>
    <article className={styles.jobCard}>
        <div ></div>
        <div className={styles.companyLogoImg}>
          <BusinessIcon fontSize='large'/>
        </div>
        <div className={styles.jobTitle}>{props.company}</div>
        <div className={styles.skillsContainer}>
          <div className={styles.skill}>{props.skill}</div>
          <div className={styles.skill}><LocationOnIcon fontSize='small'/> {props.location}</div>
          <div className={styles.skill}>{props.salary}</div>
        </div>
        <button className={styles.apply} onClick={handleLogin}>Apply</button>
      
      </article>
    </>
  )
}